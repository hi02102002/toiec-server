import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as dayjs from 'dayjs';
import {
  CreateFlashcardDto,
  QueryChartDto,
  QueryFlashcardDto,
  UpdateFlashcardDto,
} from './dtos';

const getDate = (givenDate = new Date()): string => {
  const offset = givenDate.getTimezoneOffset();
  givenDate = new Date(givenDate.getTime() - offset * 60 * 1000);
  return givenDate.toISOString().split('T')[0];
};

@Injectable()
export class FlashcardsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFlashcard(userId: string, fields: CreateFlashcardDto) {
    const { wordId, deckId, ...rest } = fields;

    const [word, deck] = await Promise.all([
      wordId
        ? this.prismaService.word.findUnique({
            where: {
              id: wordId,
            },
          })
        : undefined,
      deckId
        ? this.prismaService.deck.findFirst({
            where: {
              id: deckId,
              userId,
            },
            select: {
              id: true,
            },
          })
        : undefined,
    ]);

    if (!deck) {
      throw new NotFoundException('Deck not found');
    }

    const flashcard = await this.prismaService.flashcard.create({
      data: {
        deckId: deck.id,
        definition: word?.definition || rest.definition,
        meaning: word?.meaning || rest.meaning,
        examples: word?.examples || rest.examples,
        image: word?.image || rest.image,
        patchOfSpeech: word?.patchOfSpeech || rest.patchOfSpeech,
        note: word?.note || rest.note,
        pronunciation: word?.pronunciation || rest.pronunciation,
        name: word?.name || rest.name,
        userId,
      },
    });

    return flashcard;
  }

  async getFlashcards(userId: string, query: QueryFlashcardDto) {
    const { deckId, limit, page } = query;

    const deck = await this.prismaService.deck.findFirst({
      where: {
        id: deckId,
        userId,
      },
    });

    if (!deck) {
      throw new NotFoundException('Deck not found');
    }

    const [flashcards, total] = await this.prismaService.$transaction([
      this.prismaService.flashcard.findMany({
        where: {
          deckId,
          userId,
        },
        take: limit,
        skip: page && page > 0 ? (page - 1) * limit : 0,
        orderBy: {
          name: 'asc',
        },
      }),
      this.prismaService.flashcard.count({
        where: {
          deckId,
          userId,
        },
      }),
    ]);

    return {
      flashcards,
      total,
    };
  }

  async updateFlashcard(
    userId: string,
    id: string,
    fields: UpdateFlashcardDto,
  ) {
    const flashcard = await this.prismaService.flashcard.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!flashcard) {
      throw new NotFoundException('Flashcard not found');
    }

    const currentDate = new Date(getDate());

    const [, updatedFlashcard] = await this.prismaService.$transaction([
      this.prismaService.deck.update({
        where: {
          id: flashcard.deckId,
        },
        data: {
          learnAt: fields.lastReviewed ? new Date(getDate()) : undefined,
        },
      }),
      this.prismaService.flashcard.update({
        where: {
          id,
        },
        data: {
          ...fields,
        },
      }),
      this.prismaService.numberFlashcardLearned.upsert({
        where: {
          deckId_date: {
            deckId: flashcard.deckId,
            date: currentDate,
          },
        },
        create: {
          userId,
          date: currentDate,
          deckId: flashcard.deckId,
          learned: fields.n === 1 ? 1 : 0,
          reviewed: fields.n > 1 ? 1 : 0,
        },
        update: {
          learned: {
            increment: fields.n === 1 ? 1 : 0,
          },
          reviewed: {
            increment: fields.n > 1 ? 1 : 0,
          },
        },
      }),
    ]);

    return updatedFlashcard;
  }

  async deleteFlashcard(userId: string, id: string) {
    const flashcard = await this.prismaService.flashcard.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!flashcard) {
      throw new NotFoundException('Flashcard not found');
    }

    await this.prismaService.flashcard.delete({
      where: {
        id,
      },
    });

    return flashcard;
  }

  async getFlashcardToLearns(userId: string, deckId: string) {
    const settings = await this.prismaService.settingLearn.findUnique({
      where: {
        userId,
      },
    });

    const currentLearned =
      await this.prismaService.numberFlashcardLearned.findUnique({
        where: {
          deckId_date: {
            deckId,
            date: new Date(getDate()),
          },
        },
      });

    const maxFlashcardLearnPerDay = currentLearned.learned
      ? settings?.maxFlashcardPerDay - currentLearned.learned
      : settings?.maxFlashcardPerDay;

    const maxReviewPerDay = currentLearned.reviewed
      ? settings?.maxReviewPerDay - currentLearned.reviewed
      : settings?.maxReviewPerDay;

    const [flashcardsToLearn, flashcardsNeedReview, allFlashcards] =
      await Promise.all([
        this.prismaService.flashcard.findMany({
          where: {
            deckId,
            userId,
            n: 0,
            lastReviewed: null,
          },
          take: maxFlashcardLearnPerDay,
        }),
        this.prismaService.flashcard.findMany({
          where: {
            deckId,
            userId,
            n: {
              gte: 1,
            },
            due: {
              lte: new Date(getDate()),
            },
            lastReviewed: {
              not: {
                equals: new Date(getDate()),
              },
            },
          },
          take: maxReviewPerDay,
          orderBy: {
            lastReviewed: 'asc',
          },
        }),
        this.prismaService.flashcard.findMany({
          where: {
            deckId,
            userId,
          },
          select: {
            id: true,
            name: true,
            definition: true,
            meaning: true,
          },
        }),
      ]);

    const flashcardsNeedReviewWithAnswers = flashcardsNeedReview.map(
      (flashcard) => {
        let answers = allFlashcards
          .filter((item) => item.id !== flashcard.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);

        answers = [
          ...answers,
          {
            id: flashcard.id,
            name: flashcard.name,
            definition: flashcard.definition,
            meaning: flashcard.meaning,
          },
        ].sort(() => Math.random() - 0.5);

        return {
          ...flashcard,
          answers,
        };
      },
    );

    return [...flashcardsNeedReviewWithAnswers, ...flashcardsToLearn];
  }

  async getDataForChart(userId: string, query: QueryChartDto) {
    let { dateStart, dateEnd } = query;

    if (!dateStart) {
      dateStart = dayjs().subtract(7, 'day').toDate().toISOString();
    }

    if (!dateEnd) {
      dateEnd = dayjs().toDate().toISOString();
    }

    const charts = [];

    const diff = dayjs(dateEnd).diff(dayjs(dateStart), 'day');

    for (let i = 1; i <= diff; i++) {
      const date = dayjs(dateStart).add(i, 'day').toDate();

      const data = await this.prismaService.numberFlashcardLearned.findFirst({
        where: {
          deckId: query.deckId,
          date: new Date(getDate(date)),
          userId,
        },
      });

      charts.push({
        date: dayjs(date).format('DD/MM/YYYY'),
        learned: data?.learned || 0,
        reviewed: data?.reviewed || 0,
      });
    }

    return charts;
  }
}
