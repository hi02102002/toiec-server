import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { GrammarsController } from './grammars.controller';
import { GrammarsService } from './grammars.service';

@Module({
  controllers: [GrammarsController],
  providers: [GrammarsService],
  imports: [PrismaModule],
})
export class GrammarsModule {}
