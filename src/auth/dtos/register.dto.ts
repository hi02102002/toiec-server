import { Match } from '@/common/decorators';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsEmail(undefined, { message: 'Email is invalid' })
  @IsString()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, undefined, { message: 'Password must be at least 8 characters' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Confirm password is required',
  })
  @Match('password', { message: 'Confirm password does not match' })
  confirmPassword: string;
}
