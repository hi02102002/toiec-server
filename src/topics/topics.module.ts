import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';

@Module({
  controllers: [TopicsController],
  providers: [TopicsService],
  imports: [PrismaModule],
})
export class TopicsModule {}
