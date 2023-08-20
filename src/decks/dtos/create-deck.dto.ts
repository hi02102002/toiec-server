import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeckDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
