import { UserStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;

  @IsOptional()
  @IsString()
  avatar: string;
}
