import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDeckDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
