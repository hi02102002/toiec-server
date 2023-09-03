import { DecksModule } from '@/decks/decks.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { TestsModule } from '@/tests/tests.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule, TestsModule, DecksModule],
  exports: [UsersService],
})
export class UsersModule {}
