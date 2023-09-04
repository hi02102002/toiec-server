import { IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty({
    message: 'Email is required',
  })
  email: string;
}
