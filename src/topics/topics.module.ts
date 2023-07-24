import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService],
  imports: [PrismaModule],
})
export class TopicsModule {}
