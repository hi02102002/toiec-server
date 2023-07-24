import { JwtAuthGuard } from '@/auth/guards';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryDto, UpdateUserDto } from './dtos';
import { UsersService } from './users.service';
import { IRequestWithUser } from '@/common/types';

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
}
