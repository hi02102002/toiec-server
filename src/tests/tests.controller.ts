import { JwtAuthGuard } from '@/auth/guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateTestDto, DeleteTestsDto, QueryDto, UpdateTestDto } from './dtos';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async create(@Body() body: CreateTestDto, @Res() res: Response) {
    const test = await this.testsService.create(body);

    res.status(201).json({
      message: 'Create test successfully',
      data: test,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getAll(@Res() res: Response, @Query() query: QueryDto) {
    const { tests, total } = await this.testsService.getAll(query);

    res.status(200).json({
      message: 'Get all tests successfully',
      data: {
        tests,
        total,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() body: UpdateTestDto,
    @Param('id') id: string,
  ) {
    const test = await this.testsService.update(id, body);

    res.status(201).json({
      message: 'Create test successfully',
      data: test,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  async delete(@Res() res: Response, @Body() body: DeleteTestsDto) {
    await this.testsService.remove(body.ids);

    res.status(200).json({
      message: 'Delete tests successfully',
    });
  }
}
