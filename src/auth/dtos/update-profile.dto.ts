import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  avatar: string;
}

export class UpdateEmailDto {
  @IsString()
  @IsNotEmpty({
    message: 'Email is required',
  })
  @IsEmail()
  email: string;
}
