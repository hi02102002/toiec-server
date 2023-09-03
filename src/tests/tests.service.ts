import { SCORE_TOIEC_LISTENING } from '@/common/constants';
import { TChoice } from '@/common/types';
import { isListening } from '@/common/utils';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PartType, Test } from '@prisma/client';
import { SCORE_TOIEC_READING } from './../common/constants/index';
import {
  CreateTestDto,
  QueryDto,
  QueryResultTestDto,
  SubmitTestDto,
  UpdateTestDto,
} from './dtos';

const PARTS = {
  1: PartType.PART1,
  2: PartType.PART2,
  3: PartType.PART3,
  4: PartType.PART4,
  5: PartType.PART5,
  6: PartType.PART6,
  7: PartType.PART7,
};

@Injectable()
export class TestsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(fields: CreateTestDto) {
    const { name, audio } = fields;

    const test: Test = await this.prisma.test.create({
      data: {
        name,
        audio,
        parts: {
          createMany: {
            data: new Array(7).fill(0).map((_, index) => ({
              name: `Part ${index + 1}`,
              type: PARTS[index + 1],
            })),
          },
        },
      },
      include: {
        parts: true,
      },
    });

    return test;
  }

  async getOne(id: string) {
    try {
      const test = await this.prisma.test.findUnique({
        where: {
          id,
        },
      });
      return test;
    } catch (error) {
      if (error.code === 'P2025') {
        return null;
      }
      throw error;
    }
  }

  async remove(testIds: string[]) {
    await this.prisma.test.deleteMany({
      where: {
        id: {
          in: testIds,
        },
      },
    });
  }

  async getAll(q?: QueryDto) {
    const { asc, limit, name, orderBy, page } = q || {};

    const [total, tests] = await this.prisma.$transaction([
      this.prisma.test.count(),
      this.prisma.test.findMany({
        where: {
          name: {
            contains: name,
          },
        },
        orderBy: {
          [orderBy || 'updatedAt']: asc ? 'asc' : 'desc',
        },
        skip: page && limit ? (page - 1) * limit : 0,
        take: limit,
        include: {
          parts: true,
        },
      }),
    ]);

    return {
      total,
      tests,
    };
  }

  async update(id: string, body: UpdateTestDto) {
    const { name, audio } = body;

    const test = await this.prisma.test.update({
      where: {
        id,
      },
      data: {
        name,
        audio,
      },
      include: {
        parts: true,
      },
    });

    return test;
  }

  async getPart(id: string) {
    try {
      const part = await this.prisma.part.findUnique({
        where: {
          id,
        },
        select: {
          test: {
            select: {
              name: true,
              id: true,
            },
          },
          id: true,
          name: true,
          type: true,
        },
      });
      return part;
    } catch (error) {
      if (error.code === 'P2025') {
        return null;
      }

      throw error;
    }
  }

  async getTestToPracticeOrResult(
    id: string,
    type: 'practice' | 'explain' = 'practice',
  ) {
    const queryQuestions: any = {
      answers: {
        select: {
          content: true,
          id: true,
          questionId: true,
          updatedAt: true,
          createdAt: true,
          isCorrect: type === 'explain',
        },
      },
      audio: true,
      createdAt: true,
      id: true,
      image: true,
      grammarId: true,
      nationalTestId: true,
      part: {
        select: {
          type: true,
        },
      },
      text: true,
      updatedAt: true,
      explain: type === 'explain',
      transcript: type === 'explain',
    };

    try {
      const test = await this.prisma.test.findUnique({
        where: {
          id,
        },
        include: {
          parts: {
            include: {
              questions: {
                select: {
                  ...queryQuestions,
                  quesions: {
                    select: {
                      ...queryQuestions,
                    },
                    orderBy: {
                      createdAt: 'asc',
                    },
                  },
                },
                orderBy: {
                  createdAt: 'asc',
                },
              },
            },
          },
        },
      });
      return test;
    } catch (error) {
      if (error.code === 'P2025') {
        return null;
      }
      throw error;
    }
  }

  async submitTest(fields: SubmitTestDto, userId: string) {
    const { choices, testId } = fields;

    const test = await this.prisma.test.findUnique({
      where: {
        id: testId,
      },
    });

    if (!test) {
      throw new NotFoundException("Can't find test with this ID");
    }

    const { listening, reading } = choices.reduce(
      (prev, current) => {
        if (isListening(current.partType)) {
          return {
            ...prev,
            listening: prev.listening.concat(current),
          };
        }

        return {
          ...prev,
          reading: prev.reading.concat(current),
        };
      },
      {
        listening: [],
        reading: [],
      } as {
        listening: Array<TChoice>;
        reading: Array<TChoice>;
      },
    );

    const [numListening, numReading] = await Promise.all([
      this.calcNumberCorrect(listening),
      this.calcNumberCorrect(reading),
    ]);

    const scoreListening = SCORE_TOIEC_LISTENING(numListening);
    const scoreReading = SCORE_TOIEC_READING(numReading);

    const total = scoreListening + scoreReading;

    const count = await this.prisma.testUser.count({
      where: {
        testId,
        userId,
      },
    });

    const result = await this.prisma.testUser.create({
      data: {
        userId,
        testId,
        listeningCorrect: numListening,
        readingCorrect: numReading,
        listeningScore: scoreListening,
        readingScore: scoreReading,
        totalScore: total,
        numAttempt: count + 1,
        choices: {
          createMany: {
            data: choices.map((choice) => ({
              answerId: choice.answerId,
            })),
          },
        },
      },
    });

    return result;
  }

  async checkChoiceIsCorrect(choice: TChoice) {
    const question = await this.prisma.question.findUnique({
      where: {
        id: choice.questionId,
      },
      include: {
        answers: true,
      },
    });

    return question.answers.some((a) => {
      return a.isCorrect && a.id === choice.answerId;
    });
  }

  async calcNumberCorrect(choices: TChoice[]) {
    let count = 0;

    for (const choice of choices) {
      if (await this.checkChoiceIsCorrect(choice)) {
        count++;
      }
    }
    return count;
  }

  async getResultById(id: string, userId: string) {
    try {
      const result = await this.prisma.testUser.findFirst({
        where: {
          id,
          userId,
        },
        include: {
          user: {
            select: {
              avatar: true,
              name: true,
            },
          },
          test: {
            select: {
              name: true,
              id: true,
            },
          },
          choices: {
            select: {
              answer: {
                select: {
                  content: true,
                  id: true,
                },
              },
              testUserId: true,
              id: true,
            },
          },
        },
      });

      return result;
    } catch (error) {
      if (error.code === 'P2025') {
        return null;
      }
      throw error;
    }
  }

  async getResults(userId: string, query?: QueryResultTestDto) {
    const { limit, page } = query || {};

    const [total, results] = await this.prisma.$transaction([
      this.prisma.testUser.count({
        where: {
          userId,
        },
      }),
      this.prisma.testUser.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: page && limit ? (page - 1) * limit : 0,
        take: limit,
        select: {
          listeningCorrect: true,
          listeningScore: true,
          readingCorrect: true,
          readingScore: true,
          totalScore: true,
          id: true,
          testId: true,
          test: {
            select: {
              name: true,
              id: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      }),
    ]);

    return {
      total,
      results,
    };
  }

  async getTestForChart(userId: string) {
    const tests = await this.prisma.testUser.findMany({
      where: {
        userId,
      },
      select: {
        test: {
          select: {
            name: true,
            id: true,
          },
        },
        listeningScore: true,
        readingScore: true,
        totalScore: true,
        createdAt: true,
        id: true,
      },
    });

    return tests;
  }

  async getRecentTests(userId: string) {
    const tests = await this.prisma.testUser.findMany({
      where: {
        userId,
      },
      select: {
        test: {
          select: {
            name: true,
            id: true,
            createdAt: true,
          },
        },
        id: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
      distinct: ['testId'],
    });

    return tests;
  }
}
