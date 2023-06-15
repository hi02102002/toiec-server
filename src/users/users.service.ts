import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

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
}
