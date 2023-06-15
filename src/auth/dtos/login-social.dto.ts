import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginSocialDto {
  @IsString()
  @IsNotEmpty({ message: 'Provider is required' })
  provider: string;

  @IsString()
  @IsNotEmpty({ message: 'Email id is required' })
  @IsEmail(undefined, { message: 'Email is invalid' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsOptional()
  avatar: string;
}
