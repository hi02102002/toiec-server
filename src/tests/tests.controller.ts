import { JwtAuthGuard, RolesGuard } from '@/auth/guards';
import { Roles } from '@/common/decorators';
import { IRequestWithUser, Role } from '@/common/types';
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
import {
  CreateTestDto,
  DeleteTestsDto,
  QueryDto,
  QueryResultTestDto,
  SubmitTestDto,
  UpdateTestDto,
} from './dtos';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create(@Body() body: CreateTestDto, @Res() res: Response) {
    const test = await this.testsService.create(body);

    res.status(HttpStatus.CREATED).json({
      message: 'Create test successfully',
      data: test,
    });
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.ADMIN)
  async getAll(@Res() res: Response, @Query() query: QueryDto) {
    const { tests, total } = await this.testsService.getAll(query);

    res.status(HttpStatus.OK).json({
      message: 'Get all tests successfully',
      data: {
        tests,
        total,
      },
    });
  }

  @Get('/results')
  @UseGuards(JwtAuthGuard)
  async getResults(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Query() query: QueryResultTestDto,
  ) {
    const data = await this.testsService.getResults(req.user.id, query);
    res.status(HttpStatus.OK).json({
      data,
      message: 'Get results success',
    });
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  async getOneTest(@Res() res: Response, @Param('id') id: string) {
    const test = await this.testsService.getOne(id);

    res.status(HttpStatus.OK).json({
      message: 'Get test successfully',
      data: test,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() body: UpdateTestDto,
    @Param('id') id: string,
  ) {
    const test = await this.testsService.update(id, body);

    res.status(HttpStatus.OK).json({
      message: 'Update test successfully',
      data: test,
    });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/')
  async delete(@Res() res: Response, @Body() body: DeleteTestsDto) {
    await this.testsService.remove(body.ids);

    res.status(HttpStatus.OK).json({
      message: 'Delete tests successfully',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/parts/:id')
  async getPart(@Res() res: Response, @Param('id') id: string) {
    const parts = await this.testsService.getPart(id);

    res.status(HttpStatus.OK).json({
      message: 'Get parts successfully',
      data: parts,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/practice-result')
  async getTestToPracticeOrResult(
    @Res() res: Response,
    @Param('id') id: string,
    @Query('type') type: 'practice' | 'explain',
  ) {
    const data = await this.testsService.getTestToPracticeOrResult(id, type);

    res.status(HttpStatus.OK).json({
      data,
      message: 'Get test for practice success',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/submit')
  async submitTest(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: SubmitTestDto,
  ) {
    const data = await this.testsService.submitTest(body, req.user.id);

    res.status(HttpStatus.OK).json({
      data,
      message: 'Submit test success fully',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/results/:id')
  async getResultTest(
    @Res() res: Response,
    @Param('id') id: string,
    @Req() req: IRequestWithUser,
  ) {
    const data = await this.testsService.getResultById(id, req.user.id);
    res.status(HttpStatus.OK).json({
      data,
      message: 'Get result success',
    });
  }
}
