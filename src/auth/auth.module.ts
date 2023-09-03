import { MailModule } from '@/mail/mail.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { SettingsModule } from '@/settings/settings.module';
import { UsersModule } from '@/users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  JwtStrategy,
  LocalStrategy,
  RefreshTokenStrategy,
  SocialStrategy,
} from './strategies';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    SocialStrategy,
    RefreshTokenStrategy,
  ],
  imports: [
    UsersModule,
    PrismaModule,
    JwtModule,
    ConfigModule,
    SettingsModule,
    MailModule,
  ],
})
export class AuthModule {}
