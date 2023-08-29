import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [PrismaModule],
})
export class DashboardModule {}
