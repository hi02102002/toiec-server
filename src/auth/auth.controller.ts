import { IRequestWithUser } from '@/common/types';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { AuthService } from './auth.service';
import {
  RegisterDto,
  ResetPasswordDto,
  SendEmailDto,
  UpdateEmailDto,
  UpdateProfileDto,
} from './dtos';
import { VerifyAccountDto } from './dtos/verify-account.dto';
import {
  JwtAuthGuard,
  LocalAuthGuard,
  RefreshTokenGuard,
  SocialAuthGuard,
} from './guards';

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
      message:
        'Create your account successfully. Please verify your email to login',
      data: user,
    });
  }

  @Post('/register-admin')
  async registerAdmin(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const user = await this.authService.registerAdminAccount(registerDto);

    res.status(HttpStatus.CREATED).json({
      message: 'Create admin account successfully',
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
    const data = await this.authService.getMe(req.user.id);

    res.status(HttpStatus.OK).json({
      message: 'Get user profile successfully',
      data,
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

  @Patch('/update-profile')
  @UseGuards(JwtAuthGuard)
  async updateName(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: UpdateProfileDto,
  ) {
    const data = await this.authService.updateProfile(req.user.id, body);

    res.status(HttpStatus.OK).json({
      message: 'Update your profile successfully',
      data,
    });
  }

  @Patch('/update-email')
  @UseGuards(JwtAuthGuard)
  async updateEmail(
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @Body() body: UpdateEmailDto,
  ) {
    const data = await this.authService.updateEmail(req.user.id, body);

    res.status(HttpStatus.OK).json({
      message: 'Update your email successfully',
      data,
    });
  }

  @Post('/request-reset-password')
  async requestResetPassword(@Res() res: Response, @Body() body: SendEmailDto) {
    await this.authService.requestResetPassword(body);

    res.status(HttpStatus.OK).json({
      message:
        'Send request to reset your password successfully. Please check your email',
    });
  }

  @Post('/reset-password')
  async resetPassword(@Res() res: Response, @Body() body: ResetPasswordDto) {
    await this.authService.resetPassword(body);

    res.status(HttpStatus.OK).json({
      message: 'Reset your password successfully',
    });
  }

  @Post('request-verify-account')
  async requestVerifyAccount(@Res() res: Response, @Body() body: SendEmailDto) {
    await this.authService.sendMailVerifyAccount(body.email);

    res.status(HttpStatus.OK).json({
      message:
        'Sent email to verify your account successfully. Please check your email',
    });
  }

  @Post('verify-account')
  async verifyAccount(@Res() res: Response, @Body() body: VerifyAccountDto) {
    await this.authService.verifyAccount(body.code.toString());

    res.status(HttpStatus.OK).json({
      message: 'Verify your account successfully',
    });
  }
}
