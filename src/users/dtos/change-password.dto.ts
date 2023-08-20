import { Match } from '@/common/decorators';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty({
    message: 'Old password is required',
  })
  oldPassword: string;

  @IsString()
  @IsNotEmpty({
    message: 'New password is required',
  })
  newPassword: string;

  @IsString()
  @IsNotEmpty({
    message: 'Confirm new password is required',
  })
  @Match('newPassword', { message: 'Confirm password does not match' })
  confirmPassword: string;
}
