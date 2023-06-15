import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Strategy } from 'passport-custom';
import { AuthService } from '../auth.service';

@Injectable()
export class SocialStrategy extends PassportStrategy(Strategy, 'social') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(request: Request) {
    const { email, name, avatar, provider } = request.body;

    const user = await this.authService.validateUserBySocial({
      email,
      avatar,
      name,
      provider,
    });

    return user;
  }
}
