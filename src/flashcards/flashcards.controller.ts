import { JwtAuthGuard } from '@/auth/guards';
import { IRequestWithUser } from '@/common/types';
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
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateFlashcardDto, QueryChartDto, UpdateFlashcardDto } from './dtos';
import { QueryFlashcardDto } from './dtos/query-flashcard.dto';
import { FlashcardsService } from './flashcards.service';

@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFlashcard(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: CreateFlashcardDto,
  ) {
    const data = await this.flashcardsService.createFlashcard(
      req.user.id,
      body,
    );

    return res.status(HttpStatus.CREATED).json({
      message: 'Create flashcard successfully',
      data,
    });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getFlashcards(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Query() query: QueryFlashcardDto,
  ) {
    const data = await this.flashcardsService.getFlashcards(req.user.id, query);

    return res.status(HttpStatus.OK).json({
      message: 'Get flashcards successfully',
      data,
    });
  }

  @Get('/chart')
  @UseGuards(JwtAuthGuard)
  async getFlashcardsChart(
    @Req() req: IRequestWithUser,
    @Query() query: QueryChartDto,
    @Res() res: Response,
  ) {
    const data = await this.flashcardsService.getDataForChart(
      req.user.id,
      query,
    );

    res.status(HttpStatus.OK).json({
      message: 'Get flashcards chart successfully',
      data,
    });
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  async updateFlashcard(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: UpdateFlashcardDto,
    @Param('id') id: string,
  ) {
    const data = await this.flashcardsService.updateFlashcard(
      req.user.id,
      id,
      body,
    );

    return res.status(HttpStatus.OK).json({
      message: 'Update flashcard successfully',
      data,
    });
  }

  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async deleteFlashcard(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Param('id') id: string,
  ) {
    await this.flashcardsService.deleteFlashcard(req.user.id, id);

    return res.status(HttpStatus.OK).json({
      message: 'Delete flashcard successfully',
      data: null,
    });
  }

  @Get('/learn/:deckId')
  @UseGuards(JwtAuthGuard)
  async getFlashcardsToLearn(
    @Req() req: IRequestWithUser,
    @Param('deckId') deckId: string,
    @Res() res: Response,
  ) {
    const data = await this.flashcardsService.getFlashcardToLearns(
      req.user.id,
      deckId,
    );

    return res.status(HttpStatus.OK).json({
      message: 'Get flashcards to learn successfully',
      data,
    });
  }
}
