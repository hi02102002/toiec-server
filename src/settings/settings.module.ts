import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [PrismaModule],
  exports: [SettingsService],
})
export class SettingsModule {}
