import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserStatus } from '@prisma/client';
import { QueryDto, UpdateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    try {
      const user = this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  async findByEmailAndProvider(email: string, provider: string) {
    try {
      const user = this.prisma.user.findFirst({
        where: {
          provider,
          email,
        },
      });
      return user;
    } catch (error) {
      return null;
    }
  }

  async getAllUsers(currentUserId: string, query: QueryDto) {
    const { status, limit, page, name } = query;

    console.log({ status });

    const _status =
      status === UserStatus.ACTIVE
        ? UserStatus.ACTIVE
        : status === UserStatus.BLOCKED
        ? UserStatus.BLOCKED
        : undefined;
    const [count, users] = await this.prisma.$transaction([
      this.prisma.user.count({
        where: {
          status: _status,
          id: {
            notIn: [currentUserId],
          },
          name: {
            contains: name,
          },
        },
      }),
      this.prisma.user.findMany({
        skip: page && limit ? (page - 1) * limit : 0,
        take: limit,
        where: {
          status: _status,
          id: {
            notIn: [currentUserId],
          },
          name: {
            contains: name,
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
        select: {
          avatar: true,
          createdAt: true,
          email: true,
          name: true,
          provider: true,
          roles: true,
          status: true,
          updatedAt: true,
          id: true,
        },
      }),
    ]);

    return {
      count,
      users,
    };
  }

  async updateUser(id: string, fields: UpdateUserDto) {
    try {
      const { avatar, name, status } = fields;
      const user = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          avatar,
          status,
          name,
        },
      });
      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User with this id not found');
      }
      throw error;
    }
  }
}
