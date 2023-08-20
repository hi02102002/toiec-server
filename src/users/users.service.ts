import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto, QueryDto, UpdateUserDto } from './dtos';

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
          isTesting: true,
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

  async startTest(id: string) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        isTesting: true,
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
        isTesting: true,
      },
    });

    return user;
  }

  async stopTest(id: string) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        isTesting: false,
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
        isTesting: true,
      },
    });

    return user;
  }

  async changePassword(id: string, body: ChangePasswordDto) {
    const { oldPassword, newPassword } = body;
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User with this id not found');
    }

    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      throw new BadRequestException('Current password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
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
        isTesting: true,
      },
    });

    return updatedUser;
  }

  async deletePersonalAccount(id: string) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}
