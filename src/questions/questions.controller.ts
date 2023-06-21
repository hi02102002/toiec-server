import { JwtAuthGuard } from '@/auth/guards';
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
  QueryQuestionsDto,
  RemoveQuestionsDto,
  UpdateQuestionDto,
} from './dtos';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
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

  @UseGuards(JwtAuthGuard)
  @Get('/')
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

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getQuestion(@Res() res: Response, @Param('id') id: string) {
    const question = await this.questionsService.getQuestion(id);

    return res.status(HttpStatus.OK).json({
      message: 'Get question successfully',
      data: question,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
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

  @UseGuards(JwtAuthGuard)
  @Delete('/')
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
}
