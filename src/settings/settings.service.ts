import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSettingDto } from './dto';

@Injectable()
export class SettingsService {
  constructor(private readonly prismaService: PrismaService) {}

  async initSettings(userId: string) {
    const settingsExist = await this.prismaService.settingLearn.findUnique({
      where: {
        userId,
      },
    });

    if (settingsExist) {
      console.log('Settings already exist');
      return settingsExist;
    }

    const settings = await this.prismaService.settingLearn.create({
      data: {
        userId,
      },
    });

    return settings;
  }

  async getSetting(userId: string) {
    const setting = await this.prismaService.settingLearn.findUnique({
      where: {
        userId,
      },
    });

    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    return setting;
  }

  async updateSetting(userId: string, body: UpdateSettingDto) {
    const setting = await this.prismaService.settingLearn.findUnique({
      where: {
        userId,
      },
    });

    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    const updatedSetting = await this.prismaService.settingLearn.update({
      where: {
        userId,
      },
      data: {
        ...body,
      },
    });

    return updatedSetting;
  }
}
