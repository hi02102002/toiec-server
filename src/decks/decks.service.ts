import { PrismaService } from '@/prisma/prisma.service';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateDeckDto,
  CreateDeckFromTopicDto,
  QueryDecksDto,
  UpdateDeckDto,
} from './dtos';

@Injectable()
export class DecksService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDeck(userId: string, body: CreateDeckDto) {
    const { name } = body;

    const deckExists = await this.prismaService.deck.findUnique({
      where: {
        userId_name: {
          userId,
          name,
        },
      },
    });

    if (deckExists) {
      throw new HttpException('Deck already exists', HttpStatus.CONFLICT);
    }

    const deck = await this.prismaService.deck.create({
      data: {
        name,
        userId,
      },
    });

    return deck;
  }

  async getDeck(id: string, userId: string) {
    const deck = await this.prismaService.deck.findFirst({
      where: {
        id,
        userId,
      },
    });
    if (!deck) {
      throw new NotFoundException('Deck not found');
    }

    return deck;
  }

  async removeDeck(id: string, userId: string) {
    await this.getDeck(id, userId);

    const deck = await this.prismaService.deck.delete({
      where: {
        id,
      },
    });

    return deck;
  }

  async updateDeck(id: string, userId: string, body: UpdateDeckDto) {
    const { name } = body;
    await this.getDeck(id, userId);

    const deck = await this.prismaService.deck.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return deck;
  }

  async getDecks(userId: string, query: QueryDecksDto) {
    const { limit, name, page } = query;

    const [decks, total] = await this.prismaService.$transaction([
      this.prismaService.deck.findMany({
        where: {
          userId,
          name: {
            contains: name,
          },
        },
        skip: page && page > 0 && limit ? (page - 1) * limit : undefined,
        take: limit,
        include: {
          _count: {
            select: {
              flashcards: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.prismaService.deck.count({
        where: {
          userId,
          name: {
            contains: name,
          },
        },
      }),
    ]);

    return {
      decks,
      total,
    };
  }

  async createDeckFromTopic(userId: string, data: CreateDeckFromTopicDto) {
    const { name, topicId } = data;

    const topic = await this.prismaService.topic.findUnique({
      where: {
        id: topicId,
      },
      include: {
        words: true,
      },
    });

    if (!topic) {
      throw new NotFoundException('Topic not found');
    }

    const deckExists = await this.prismaService.deck.findUnique({
      where: {
        userId_name: {
          userId,
          name,
        },
      },
    });

    if (deckExists) {
      return deckExists;
    }

    const deck = await this.prismaService.deck.create({
      data: {
        name,
        userId,
      },
    });

    await this.prismaService.flashcard.createMany({
      data: topic.words.map((word) => ({
        deckId: deck.id,
        definition: word.definition,
        meaning: word.meaning,
        examples: word.examples,
        image: word.image,
        patchOfSpeech: word.patchOfSpeech,
        note: word.note,
        pronunciation: word.pronunciation,
        name: word.name,
        userId,
      })),
      skipDuplicates: true,
    });

    return deck;
  }
}
