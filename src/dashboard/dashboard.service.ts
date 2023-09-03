import { DecksService } from '@/decks/decks.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TestsService } from '@/tests/tests.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly testsService: TestsService,
    private readonly decksService: DecksService,
  ) {}

  async getAdminDashboard() {
    const [top5TestUseMost, top5UserHighestScore] = await Promise.all([
      this.getTop5TestUseMost(),
      this.getTop5UserHaveHighestScore(),
    ]);

    return {
      top5TestUseMost,
      top5UserHighestScore,
    };
  }
  async getUserDashboard(id: string) {
    const [recentDecks, recentTests] = await Promise.all([
      this.decksService.getRecentDecks(id),
      this.testsService.getRecentTests(id),
    ]);

    return {
      recentDecks,
      recentTests,
    };
  }

  async getTop5TestUseMost() {
    const top5UsedTests = await this.prisma.$queryRaw`
       SELECT t.id AS testId, t.name AS testName, COUNT(tu.test_id) AS usageCount
        FROM "tests" t
        LEFT JOIN "test_users" tu ON t.id = tu.test_id
        GROUP BY t.id, t.name
        ORDER BY usageCount DESC
        LIMIT 5;
                `;
    return top5UsedTests as Array<{
      testId: string;
      testName: string;
      usageCount: number;
    }>;
  }

  async getTop5TopicUseMost() {
    const top5UsedTopics = await this.prisma.$queryRaw`
      SELECT topic.id AS topicId, topic.name AS topicName, COUNT(deck.topic_id) AS usageCount
      FROM topics AS topic
      LEFT JOIN decks AS deck ON topic.id = deck.topic_id
      GROUP BY topic.id, topic.name
      HAVING COUNT(deck.topic_id) > 0
      ORDER BY usageCount DESC
      LIMIT 5
    `;

    return top5UsedTopics as Array<{
      topicId: string;
      topicName: string;
      usageCount: number;
    }>;
  }

  async getTop5UserHaveHighestScore() {
    const top5Users = await this.prisma.$queryRaw`
    SELECT u.id AS user_id, u.name AS username, t.max_total_score AS total_score,
       tu.test_id, t2.name as test_name
    FROM users AS u
    LEFT JOIN (
      SELECT user_id, MAX(total_score) AS max_total_score
      FROM test_users
      GROUP BY user_id
    ) AS t ON u.id = t.user_id
    LEFT JOIN test_users AS tu ON t.user_id = tu.user_id AND t.max_total_score = tu.total_score
    LEFT JOIN tests AS t2 ON tu.test_id = t2.id
    WHERE t.max_total_score > 0
    ORDER BY total_score DESC
    `;

    return top5Users as Array<{
      user_id: string;
      username: string;
      total_score: number;
      test_id: string;
      test_name: string;
    }>;
  }
}
