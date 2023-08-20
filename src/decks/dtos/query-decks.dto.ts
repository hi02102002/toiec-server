import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryDecksDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => toNumber(value))
  page?: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => toNumber(value))
  limit?: number;
}
