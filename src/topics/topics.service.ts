import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTopicDto,
  CreateWordDto,
  QueryTopicDto,
  UpdateTopicDto,
} from './dto';
import { QueryWordsDto } from './dto/query-words.dto';
import { UpdateWordDto } from './dto/update-word.dto';

@Injectable()
export class TopicsService {
  constructor(private readonly prisma: PrismaService) {}

  async getTopic(id: string) {
    const topic = await this.prisma.topic.findUnique({
      where: {
        id,
      },
    });

    return topic;
  }

  async createTopic(fields: CreateTopicDto) {
    const { name, parentId = null, hasChild } = fields;

    const topic = await this.prisma.topic.create({
      data: {
        name,
        parentId: parentId,
        hasChild,
      },
    });

    return topic;
  }

  async getTopics(query: QueryTopicDto) {
    const { limit, name, page, parentId, haveChild } = query;

    const [topics, total] = await this.prisma.$transaction([
      this.prisma.topic.findMany({
        where: {
          name: {
            contains: name,
          },
          parentId: parentId || null,
        },
        skip: page && limit ? (page - 1) * limit : undefined,
        take: limit,
        orderBy: {
          createdAt: 'asc',
        },
        include: {
          topics: haveChild ? true : false,
          _count: {
            select: {
              topics: true,
              words: true,
            },
          },
        },
      }),
      this.prisma.topic.count({
        where: {
          name: {
            contains: name,
          },
          parentId: parentId || null,
        },
      }),
    ]);

    return {
      topics,
      total,
    };
  }

  async updateTopic(id: string, body: UpdateTopicDto) {
    try {
      const { name } = body;

      const topic = await this.prisma.topic.update({
        where: {
          id,
        },
        data: {
          name,
        },
      });

      return topic;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('Topic not found');
      }
      throw error;
    }
  }

  async deleteTopic(id: string) {
    try {
      const topic = await this.prisma.topic.delete({
        where: {
          id,
        },
      });

      return topic;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error('Topic not found');
      }
      throw error;
    }
  }

  async deleteTopics(ids: string[]) {
    const topics = await this.prisma.topic.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return topics;
  }

  async createWord(topicId: string, body: CreateWordDto) {
    const {
      name,
      definition,
      meaning,
      examples,
      image,
      patchOfSpeech,
      note,
      audios,
      pronunciation,
    } = body;

    const word = await this.prisma.word.create({
      data: {
        name,
        definition,
        meaning,
        examples: {
          set: examples,
        },
        image,
        patchOfSpeech,
        note,
        audios: {
          createMany: {
            data: audios,
          },
        },
        topic: {
          connect: {
            id: topicId,
          },
        },
        pronunciation,
      },
      include: {
        audios: true,
      },
    });

    return word;
  }

  async getWords(topicId: string, query: QueryWordsDto) {
    const { limit, name, page } = query;

    const topic = await this.prisma.topic.findUnique({
      where: {
        id: topicId,
      },
    });

    if (!topic) {
      throw new NotFoundException('Topic not found');
    }

    const [words, total] = await this.prisma.$transaction([
      this.prisma.word.findMany({
        where: {
          name: {
            contains: name,
          },
          topicId,
        },
        skip: page && page > 0 && limit ? (page - 1) * limit : undefined,
        take: limit,
        orderBy: {
          createdAt: 'asc',
        },
        include: {
          audios: true,
        },
      }),
      this.prisma.word.count({
        where: {
          name: {
            contains: name,
          },
          topicId,
        },
      }),
    ]);

    return {
      words,
      total,
      topic,
    };
  }

  async updateWord(wordId: string, body: UpdateWordDto) {
    const {
      audios,
      definition,
      examples,
      image,
      meaning,
      name,
      note,
      patchOfSpeech,
      pronunciation,
    } = body;
    const word = await this.prisma.word.update({
      where: {
        id: wordId,
      },
      data: {
        name,
        definition,
        meaning,
        examples: {
          set: examples,
        },
        image,
        patchOfSpeech,
        note,
        audios: {
          deleteMany: {},
          createMany: {
            data: audios.map((audio) => ({
              region: audio.region,
              src: audio.src,
            })),
          },
        },
        pronunciation,
      },
      include: {
        audios: true,
      },
    });

    return word;
  }

  async deleteWords(ids: string[]) {
    await this.prisma.word.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
