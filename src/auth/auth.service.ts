import { Role } from '@/common/types';
import { PrismaService } from '@/prisma/prisma.service';
import { UsersService } from '@/users/users.service';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { omit } from 'lodash';
import { LoginDto, LoginSocialDto, RegisterDto } from './dtos';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(fields: LoginDto) {
    const { email, password } = fields;
    const user = await this.usersService.findOne(email);
    if (!user) {
      throw new BadRequestException('User with this email not found');
    }

    if (user.provider !== 'local') {
      throw new BadRequestException(
        'This account is using by another provider',
      );
    }

    const isMatch = await this.comparePassword(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Password is incorrect. Please try again');
    }

    return omit(user, ['password']);
  }

  async comparePassword(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword);
  }

  async register(fields: RegisterDto) {
    const { email, password, name } = fields;

    const userExist = await this.usersService.findOne(email);

    if (userExist) {
      throw new HttpException('This email is using by another user', 409);
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashed,
        provider: 'local',
        roles: [Role.USER],
      },
    });

    return omit(user, ['password']);
  }

  async validateUserBySocial(fields: LoginSocialDto) {
    const { email, provider, avatar, name } = fields;

    const userExist = await this.usersService.findOne(email);

    if (!userExist) {
      const user = await this.prismaService.user.create({
        data: {
          email,
          name,
          avatar,
          provider,
          roles: [Role.USER],
        },
      });
      return omit(user, ['password']);
    }

    if (userExist.provider !== provider) {
      throw new HttpException(
        `This email is using by another user with provider ${userExist.provider}`,
        409,
      );
    }

    return omit(userExist, ['password']);
  }

  async login(user: User) {
    const [accessToken, refreshToken] = await Promise.all([
      this.generateToken(user, 'access'),
      this.generateToken(user, 'refresh'),
    ]);
    const _user = await this.prismaService.user.update({
      where: {
        email: user.email,
      },
      data: {
        refreshToken,
      },
    });
    return {
      accessToken,
      refreshToken,
      user: omit(_user, ['password', 'refreshToken']),
    };
  }

  async generateToken(user: User, type: 'access' | 'refresh') {
    const payload = {
      email: user.email,
      sub: user.id,
      roles: user.roles,
    };
    if (type === 'access') {
      return this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: '24h',
      });
    }

    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d',
    });
  }

  async logout(user: User) {
    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: null,
      },
    });
  }

  async refreshToken(user: User, refreshToken: string) {
    try {
      await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const [newAccessToken, newRefreshToken] = await Promise.all([
        this.generateToken(user, 'access'),
        this.generateToken(user, 'refresh'),
      ]);

      await this.prismaService.user.update({
        where: {
          email: user.email,
        },
        data: {
          refreshToken: newRefreshToken,
        },
      });

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
    } catch (error) {
      await this.prismaService.user.update({
        where: {
          email: user.email,
        },
        data: {
          refreshToken: null,
        },
      });
      throw new HttpException('Refresh token is invalid', 401);
    }
  }
}
