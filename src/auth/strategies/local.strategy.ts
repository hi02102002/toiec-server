import { AuthService } from '@/auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserStatus } from '@prisma/client';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser({ email, password });

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.status === UserStatus.BLOCKED) {
      throw new UnauthorizedException(
        'Your account is blocked by admin. Please contact admin to resolve problem.',
      );
    }

    return user;
  }
}
