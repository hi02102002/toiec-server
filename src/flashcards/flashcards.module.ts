import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { FlashcardsController } from './flashcards.controller';
import { FlashcardsService } from './flashcards.service';

@Module({
  controllers: [FlashcardsController],
  providers: [FlashcardsService],
  imports: [PrismaModule],
})
export class FlashcardsModule {}
