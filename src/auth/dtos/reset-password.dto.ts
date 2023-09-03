import { Match } from '@/common/decorators';
import { IsNotEmpty, IsString } from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty({
    message: 'Token is required',
  })
  token: string;

  @IsString()
  @IsNotEmpty({
    message: 'Password is required',
  })
  password: string;

  @IsString()
  @IsNotEmpty({
    message: 'Confirm password is required',
  })
  @Match('password', { message: 'Confirm password does not match' })
  confirmPassword: string;
}
