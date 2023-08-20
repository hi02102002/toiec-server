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
import { ChangePasswordDto, QueryDto, UpdateUserDto } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  async getAllUsers(
    @Res() res: Response,
    @Query() query: QueryDto,
    @Req() req: IRequestWithUser,
  ) {
    const data = await this.usersService.getAllUsers(req.user.id, query);

    res.status(HttpStatus.OK).json({
      message: 'Get all users successfully',
      data,
    });
  }

  @Patch('/:id')
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ) {
    const data = await this.usersService.updateUser(id, body);

    res.status(HttpStatus.OK).json({
      message: 'Update successfully',
      data,
    });
  }

  @Post('/start-test')
  @UseGuards(JwtAuthGuard)
  async startTest(@Res() res: Response, @Req() req: IRequestWithUser) {
    const data = await this.usersService.startTest(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Start test successfully',
      data,
    });
  }

  @Post('/finish-test')
  @UseGuards(JwtAuthGuard)
  async finishTest(@Res() res: Response, @Req() req: IRequestWithUser) {
    const data = await this.usersService.stopTest(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Finish test successfully',
      data,
    });
  }

  @Post('/change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: ChangePasswordDto,
  ) {
    const data = await this.usersService.changePassword(req.user.id, body);

    res.status(HttpStatus.OK).json({
      message: 'Change your password successfully',
      data,
    });
  }

  @Delete('/personal-account')
  @UseGuards(JwtAuthGuard)
  async deletePersonalAccount(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
  ) {
    const data = await this.usersService.deletePersonalAccount(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Delete your account successfully',
      data,
    });
  }
}
