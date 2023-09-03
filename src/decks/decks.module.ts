import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';

@Module({
  controllers: [DecksController],
  providers: [DecksService],
  imports: [PrismaModule],
  exports: [DecksService],
})
export class DecksModule {}
