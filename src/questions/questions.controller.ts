import { JwtAuthGuard, RolesGuard } from '@/auth/guards';
import { Roles } from '@/common/decorators';
import { Role } from '@/common/types';
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
import {
  CreateQuestionDto,
  ImportJsonDto,
  QueryQuestionsDto,
  RemoveQuestionsDto,
  UpdateQuestionDto,
} from './dtos';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async createQuestion(
    @Body() fields: CreateQuestionDto,
    @Res() res: Response,
  ) {
    const question = await this.questionsService.createQuestion(fields);

    return res.status(HttpStatus.CREATED).json({
      message: 'Create question successfully',
      data: question,
    });
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllQuestions(
    @Res() res: Response,
    @Query() query: QueryQuestionsDto,
  ) {
    const { questions, total } = await this.questionsService.getAllQuestions(
      query,
    );

    return res.status(HttpStatus.OK).json({
      message: 'Get all questions successfully',
      data: { questions, total },
    });
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getQuestion(@Res() res: Response, @Param('id') id: string) {
    const question = await this.questionsService.getQuestion(id);

    return res.status(HttpStatus.OK).json({
      message: 'Get question successfully',
      data: question,
    });
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async updateQuestion(
    @Res() res: Response,
    @Body() fields: UpdateQuestionDto,
    @Param('id') id: string,
  ) {
    const question = await this.questionsService.updateQuestion(fields, id);

    return res.status(HttpStatus.OK).json({
      message: 'Update question successfully',
      data: question,
    });
  }

  @Delete('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async removeQuestions(
    @Res() res: Response,
    @Body() fields: RemoveQuestionsDto,
  ) {
    await this.questionsService.removeQuestions(fields);

    res.status(HttpStatus.OK).json({
      message: 'Remove questions successfully',
      data: null,
    });
  }

  @Post('/import')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async importQuestions(@Res() res: Response, @Body() fields: ImportJsonDto) {
    await this.questionsService.importQuestions(fields);

    res.status(HttpStatus.OK).json({
      message: 'Import questions successfully',
      data: null,
    });
  }
}
