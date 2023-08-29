import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  getAdminDashboard() {
    throw new Error('Method not implemented.');
  }
  async getUserDashboard(id: string) {
    const [recentDecks, recentTests] = await Promise.all([
      this.getRecentDecks(id),
      this.getRecentTests(id),
    ]);

    return {
      recentDecks,
      recentTests,
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

  async getRecentDecks(userId: string) {
    const decks = await this.prisma.deck.findMany({
      where: {
        userId,
        NOT: {
          learnAt: null,
        },
      },
      select: {
        name: true,
        id: true,
        _count: {
          select: {
            flashcards: true,
          },
        },
      },
      orderBy: {
        learnAt: 'desc',
      },
      take: 5,
    });

    return decks;
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

  async getTop5UsersHaveHighestScore() {
    const users = await this.prisma.testUser.findMany({
      select: {
        userId: true,
        totalScore: true,
        test: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        totalScore: 'desc',
      },
      take: 5,
      distinct: ['userId'],
    });

    return users;
  }

  async getTop5TestUseMost() {
    const tests = await this.prisma.testUser.findMany({
      select: {
        testId: true,
        test: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        testId: 'desc',
      },
      take: 5,
      distinct: ['testId'],
    });

    return tests;
  }
}
