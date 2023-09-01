import { JwtAuthGuard, RolesGuard } from '@/auth/guards';
import { Roles } from '@/common/decorators';
import { IRequestWithUser, Role } from '@/common/types';
import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/users')
  @UseGuards(JwtAuthGuard)
  async getUserDashboard(@Res() res: Response, @Req() req: IRequestWithUser) {
    const data = await this.dashboardService.getUserDashboard(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Get user dashboard successfully',
      data,
    });
  }

  @Get('/admins')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getAdminDashboard(@Res() res: Response, @Req() req: IRequestWithUser) {
    const data = await this.dashboardService.getAdminDashboard();

    res.status(HttpStatus.OK).json({
      message: 'Get admin dashboard successfully',
      data,
    });
  }
}
