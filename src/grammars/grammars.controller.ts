import { JwtAuthGuard } from '@/auth/guards';
import { RemoveQuestionsDto } from '@/questions/dtos';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateGrammarDto, QueryDto, UpdateGrammarDto } from './dtos';
import { GrammarsService } from './grammars.service';

@Controller('grammars')
export class GrammarsController {
  constructor(private readonly grammarsService: GrammarsService) {}

  @Get('/')
  async getAllGrammars(@Query() query: QueryDto, @Res() res: Response) {
    const data = await this.grammarsService.getAllGrammars(query);

    res.status(HttpStatus.OK).json({
      message: 'Get all grammars success',
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createGrammarLesson(
    @Body() fields: CreateGrammarDto,
    @Res() res: Response,
  ) {
    const data = await this.grammarsService.createGrammarLesson(fields);

    res.status(HttpStatus.CREATED).json({
      message: 'Create grammar lesson successfully',
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async updateGrammar(
    @Body() fields: UpdateGrammarDto,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    const data = await this.grammarsService.updateGrammarLesson(id, fields);
    res.status(HttpStatus.OK).json({
      message: 'Update grammar lesson successfully',
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  async deleteGrammars(
    @Body() fields: RemoveQuestionsDto,
    @Res() res: Response,
  ) {
    await this.grammarsService.removeGrammars(fields.ids);

    res.status(HttpStatus.OK).json({
      message: 'Remove grammar lessons successfully',
      data: null,
    });
  }

  @Get('/:id')
  async getGrammar(@Param('id') id: string, @Res() res: Response) {
    const data = await this.grammarsService.getGrammar(id);

    res.status(HttpStatus.OK).json({
      message: 'Get grammar lesson successfully',
      data,
    });
  }
}
