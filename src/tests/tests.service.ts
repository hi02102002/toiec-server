import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PartType, Test } from '@prisma/client';
import { CreateTestDto, QueryDto } from './dtos';

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
    const { name } = fields;

    const test: Test = await this.prisma.test.create({
      data: {
        name,
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

  async update(id: string, body: CreateTestDto) {
    const { name } = body;

    const test = await this.prisma.test.update({
      where: {
        id,
      },
      data: {
        name,
      },
      include: {
        parts: true,
      },
    });

    return test;
  }
}
