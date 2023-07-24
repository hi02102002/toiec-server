import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGrammarDto, QueryDto, UpdateGrammarDto } from './dtos';

@Injectable()
export class GrammarsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllGrammars(query: QueryDto) {
    const { page, limit, name } = query;
    const [total, grammars] = await this.prismaService.$transaction([
      this.prismaService.grammar.count(),
      this.prismaService.grammar.findMany({
        skip: page && limit ? (page - 1) * limit : undefined,
        take: limit,
        where: {
          name: {
            contains: name,
          },
        },
      }),
    ]);

    return {
      total,
      grammars,
    };
  }

  async createGrammarLesson(fields: CreateGrammarDto) {
    const { name, theory } = fields;

    const grammarLesson = await this.prismaService.grammar.create({
      data: {
        name,
        theory,
      },
    });

    return grammarLesson;
  }

  async updateGrammarLesson(id: string, fields: UpdateGrammarDto) {
    const grammar = await this.prismaService.grammar.update({
      where: {
        id,
      },
      data: fields,
    });

    return grammar;
  }

  async removeGrammars(ids: string[]) {
    await this.prismaService.grammar.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  async getGrammar(id: string) {
    try {
      const grammar = await this.prismaService.grammar.findUnique({
        where: {
          id,
        },
      });
      return grammar;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('Grammar lesson not found');
      }
      throw error;
    }
  }
}
