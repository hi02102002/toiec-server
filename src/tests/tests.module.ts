import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';

@Module({
  controllers: [TestsController],
  providers: [TestsService],
  imports: [PrismaModule],
  exports: [TestsService],
})
export class TestsModule {}
