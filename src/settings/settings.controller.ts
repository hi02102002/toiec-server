import { JwtAuthGuard } from '@/auth/guards';
import { IRequestWithUser } from '@/common/types';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UpdateSettingDto } from './dto';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserSetting(@Res() res: Response, @Req() req: IRequestWithUser) {
    const data = await this.settingsService.getSetting(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Get user setting successfully',
      data,
    });
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  async updateUserSetting(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: UpdateSettingDto,
  ) {
    const data = await this.settingsService.updateSetting(req.user.id, body);

    res.status(HttpStatus.OK).json({
      message: 'Update user setting successfully',
      data,
    });
  }
}
