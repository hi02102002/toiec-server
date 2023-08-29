import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class UpdateFlashcardDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  definition: string;

  @IsString()
  @IsOptional()
  meaning: string;

  @IsArray()
  @IsOptional()
  examples: string[];

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  patchOfSpeech: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  @IsOptional()
  pronunciation: string;

  @IsString()
  @IsOptional()
  lastReviewed: string;

  @IsString()
  @IsOptional()
  due: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  efactor: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  interval: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  n: number;
}
