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
import { DecksService } from './decks.service';
import {
  CreateDeckDto,
  CreateDeckFromTopicDto,
  QueryDecksDto,
  UpdateDeckDto,
} from './dtos';

@Controller('decks')
@UseGuards(JwtAuthGuard)
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Get()
  async getDecks(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Query() query: QueryDecksDto,
  ) {
    const data = await this.decksService.getDecks(req.user.id, query);

    return res.status(HttpStatus.OK).json({
      message: 'Get decks successfully',
      data,
    });
  }

  @Post()
  async createDeck(
    @Body() body: CreateDeckDto,
    @Res() res: Response,
    @Req() req: IRequestWithUser,
  ) {
    const data = await this.decksService.createDeck(req.user.id, body);

    return res.status(201).json({
      message: 'Create deck successfully',
      data,
    });
  }
  @Get('/:id')
  async getDeck(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Param('id') id: string,
  ) {
    const data = await this.decksService.getDeck(id, req.user.id);

    return res.status(HttpStatus.OK).json({
      message: 'Get deck successfully',
      data,
    });
  }

  @Delete('/:id')
  async removeDeck(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Param('id') id: string,
  ) {
    const data = await this.decksService.removeDeck(id, req.user.id);

    return res.status(HttpStatus.OK).json({
      message: 'Remove deck successfully',
      data,
    });
  }

  @Patch('/:id')
  async updateDeck(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Param('id') id: string,
    @Body() body: UpdateDeckDto,
  ) {
    const data = await this.decksService.updateDeck(id, req.user.id, body);

    return res.status(HttpStatus.OK).json({
      message: 'Update deck successfully',
      data,
    });
  }

  @Post('/from-topic')
  async createDeckFromTopic(
    @Body() body: CreateDeckFromTopicDto,
    @Res() res: Response,
    @Req() req: IRequestWithUser,
  ) {
    const data = await this.decksService.createDeckFromTopic(req.user.id, body);

    return res.status(HttpStatus.CREATED).json({
      message: 'Create deck from topic successfully',
      data,
    });
  }
}
