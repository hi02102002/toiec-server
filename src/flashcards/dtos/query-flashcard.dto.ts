import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryFlashcardDto {
  @IsString()
  @IsNotEmpty()
  deckId: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  page?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  limit?: number;
}
