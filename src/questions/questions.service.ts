import { LIMIT_QUESTIONS_PART } from '@/common/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateQuestionDto,
  QueryQuestionsDto,
  RemoveQuestionsDto,
  UpdateQuestionDto,
} from './dtos';

@Injectable()
export class QuestionsService {
  constructor(private readonly prismaService: PrismaService) {}
  async createQuestion(fields: CreateQuestionDto) {
    const {
      audio,
      image,
      parentId,
      partId,
      partType,
      text,
      explain,
      transcript,
      answers,
      grammarId,
      testId,
    } = fields;

    if (!parentId) {
      const total = await this.prismaService.question.count({
        where: {
          partId,
        },
      });

      if (total >= LIMIT_QUESTIONS_PART[partType]) {
        throw new BadRequestException('Enough questions for this part');
      }
    }

    const question = await this.prismaService.question.create({
      data: {
        audio,
        image,
        parentId: parentId || null,
        grammarId,
        text,
        explain,
        transcript,
        partId,
        answers: answers
          ? {
              createMany: {
                data: answers,
              },
            }
          : undefined,
        testId,
      },
    });

    return question;
  }

  async getQuestion(id: string) {
    try {
      const question = await this.prismaService.question.findUnique({
        where: {
          id,
        },
        include: {
          answers: true,
          part: true,
        },
      });

      return question;
    } catch (error: any) {
      if (error.code === 'P2025') {
        return null;
      }
      throw error;
    }
  }

  async getAllQuestions(query: QueryQuestionsDto) {
    const { page, limit, partId, parentId, grammarId } = query;

    // total = 10 page 1 limit 5

    const [total, questions] = await this.prismaService.$transaction([
      this.prismaService.question.count({
        where: {
          OR: [
            {
              partId,
            },
            {
              parentId,
            },
            {
              grammarId,
            },
          ],
        },
      }),
      this.prismaService.question.findMany({
        where: {
          OR: [
            {
              partId,
            },
            {
              parentId,
            },
            {
              grammarId,
            },
          ],
        },
        skip: page && limit ? (page - 1) * limit : undefined,
        take: limit,
        include: {
          answers: true,
          quesions: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      }),
    ]);

    return {
      total,
      questions,
    };
  }

  async updateQuestion(fields: UpdateQuestionDto, id: string) {
    const {
      answers,
      audio,
      explain,
      image,
      parentId,
      partId,
      text,
      transcript,
    } = fields;

    const question = await this.prismaService.question.update({
      where: {
        id,
      },
      data: {
        audio,
        image,
        parentId: parentId || null,
        text,
        explain,
        transcript,
        partId,
        answers: {
          deleteMany: {
            id: {
              in: answers.map((answer) => answer.id),
            },
          },
          createMany: {
            data: answers.map((answer) => ({
              content: answer.content,
              isCorrect: answer.isCorrect,
            })),
          },
        },
      },
      include: {
        answers: true,
      },
    });

    return question;
  }

  removeQuestions(fields: RemoveQuestionsDto) {
    const { ids } = fields;

    const questions = this.prismaService.question.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return questions;
  }
}
