import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { QueryDto } from './dtos';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllActivities(q?: QueryDto) {
    let { dateEnd, dateStart } = q || {};
    const currentDate = new Date();

    dateEnd = dateEnd || currentDate;

    dateStart =
      dateStart ||
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    const activities = await this.prismaService.activity.findMany({
      where: {
        userId: q.userId,
        timestamp: {
          lte: dateEnd,
          gte: dateStart,
        },
      },
    });

    return activities;
  }

  async getLongestStreak(userId: string) {
    const activities = await this.prismaService.activity.findMany({
      where: {
        userId,
      },
      orderBy: {
        timestamp: 'asc', // Sort by timestamp ascending
      },
    });

    let currentStreak = 0;
    let longestStreak = 0;

    for (let i = 0; i < activities.length - 1; i++) {
      const currentDate = dayjs(activities[i].timestamp);

      const nextDate = dayjs(activities[i + 1].timestamp);

      const diff = currentDate.diff(nextDate, 'day');

      if (diff <= 1) {
        currentStreak++;
      } else {
        currentStreak = 0;
      }

      if (currentStreak >= longestStreak) {
        longestStreak = currentStreak;
      }
    }

    return longestStreak;
  }
}
