import { IsNotEmpty, IsString } from 'class-validator';

export class RequestResetPasswordDto {
  @IsString()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;
}
