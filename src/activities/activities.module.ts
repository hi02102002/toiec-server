import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [PrismaModule],
})
export class ActivitiesModule {}
