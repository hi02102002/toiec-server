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
} from '@nestjs/common';
import { Response } from 'express';
import {
  CreateTopicDto,
  CreateWordDto,
  QueryTopicDto,
  UpdateTopicDto,
} from './dto';
import { QueryWordsDto } from './dto/query-words.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  async createTopic(@Body() body: CreateTopicDto, @Res() res: Response) {
    const topic = await this.topicsService.createTopic(body);
    return res.status(HttpStatus.CREATED).json({
      message: 'Topic created successfully',
      data: topic,
    });
  }

  @Get()
  async getTopics(@Res() res: Response, @Query() query: QueryTopicDto) {
    const data = await this.topicsService.getTopics(query);
    return res.status(HttpStatus.OK).json({
      message: 'Topics fetched successfully',
      data,
    });
  }

  @Get(':id')
  async getTopic(@Res() res: Response, @Param('id') id: string) {
    const topic = await this.topicsService.getTopic(id);
    return res.status(HttpStatus.OK).json({
      message: 'Topic fetched successfully',
      data: topic,
    });
  }

  @Patch(':id')
  async updateTopic(
    @Res() res: Response,
    @Body() body: UpdateTopicDto,
    @Param('id') id: string,
  ) {
    const topic = await this.topicsService.updateTopic(id, body);
    return res.status(HttpStatus.OK).json({
      message: 'Topic updated successfully',
      data: topic,
    });
  }

  @Delete('/words')
  async deleteWords(@Res() res: Response, @Body() body: { ids: string[] }) {
    await this.topicsService.deleteWords(body.ids);
    return res.status(HttpStatus.OK).json({
      message: 'Words deleted successfully',
      data: null,
    });
  }

  @Delete('/:id')
  async deleteTopic(@Res() res: Response, @Param('id') id: string) {
    const topic = await this.topicsService.deleteTopic(id);
    return res.status(HttpStatus.OK).json({
      message: 'Topic deleted successfully',
      data: topic,
    });
  }

  @Delete()
  async deleteTopics(@Res() res: Response, @Body() body: { ids: string[] }) {
    const topics = await this.topicsService.deleteTopics(body.ids);
    return res.status(HttpStatus.OK).json({
      message: 'Topics deleted successfully',
      data: topics,
    });
  }

  @Post('/:id/words')
  async createWord(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: CreateWordDto,
  ) {
    const topic = await this.topicsService.createWord(id, body);
    return res.status(HttpStatus.OK).json({
      message: 'Word added successfully',
      data: topic,
    });
  }

  @Get('/:id/words')
  async getWords(
    @Res() res: Response,
    @Param('id') id: string,
    @Query() query: QueryWordsDto,
  ) {
    const data = await this.topicsService.getWords(id, query);
    return res.status(HttpStatus.OK).json({
      message: 'Word added successfully',
      data,
    });
  }

  @Patch('/words/:wordId')
  async updateWord(
    @Res() res: Response,
    @Param('wordId') wordId: string,
    @Body() body: UpdateWordDto,
  ) {
    const data = await this.topicsService.updateWord(wordId, body);
    return res.status(HttpStatus.OK).json({
      message: 'Word updated successfully',
      data,
    });
  }
}
