import { IsOptional, IsString } from 'class-validator';

export class UpdateGrammarDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  theory: string;
}
