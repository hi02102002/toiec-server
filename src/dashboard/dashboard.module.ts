import { DecksModule } from '@/decks/decks.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { TestsModule } from '@/tests/tests.module';
import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [PrismaModule, TestsModule, DecksModule],
})
export class DashboardModule {}
