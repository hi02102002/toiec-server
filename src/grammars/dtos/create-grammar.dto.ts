import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGrammarDto {
  @IsString()
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Theory is required',
  })
  theory: string;
}
