import { IRequestWithUser } from '@/common/types';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { omit } from 'lodash';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  RefreshTokenGuard,
  SocialAuthGuard,
} from './guards';

const handleCookie = async (
  res: Response,
  accessToken: string,
  refreshToken: string,
) => {
  res.cookie('access_token', accessToken, {
    maxAge: 1000 * 60 * 60 * 23, // 23 hours
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  res.cookie('refresh_token', refreshToken, {
    maxAge: 1000 * 60 * 60 * 24 * 6, // 6 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });
};

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: IRequestWithUser, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authService.login(
      req.user,
    );

    res.status(HttpStatus.OK).json({
      message: 'Login successfully',
      data: {
        accessToken,
        refreshToken,
      },
    });
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const user = await this.authService.register(registerDto);

    res.status(HttpStatus.CREATED).json({
      message: 'Create account successfully',
      data: user,
    });
  }

  @UseGuards(SocialAuthGuard)
  @Post('/login-social')
  async loginSocial(@Res() res: Response, @Req() req: IRequestWithUser) {
    const { accessToken, refreshToken } = await this.authService.login(
      req.user,
    );

    res.status(HttpStatus.OK).json({
      message: 'Login social successfully',
      data: {
        accessToken,
        refreshToken,
      },
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async me(@Req() req: IRequestWithUser, @Res() res: Response) {
    res.status(HttpStatus.OK).json({
      message: 'Get user profile successfully',
      data: omit(req.user, ['password', 'refreshToken']),
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Res() res: Response, @Req() req: IRequestWithUser) {
    await this.authService.logout(req.user);

    res.status(HttpStatus.OK).json({
      message: 'Logout successfully',
    });
  }

  @UseGuards(RefreshTokenGuard)
  @Post('/refresh-token')
  async refreshToken(@Req() req: IRequestWithUser, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authService.refreshToken(
      req.user,
      req.user.refreshToken,
    );

    res.status(HttpStatus.OK).json({
      message: 'Refresh token successfully',
      data: {
        accessToken,
        refreshToken,
      },
    });
  }
}
