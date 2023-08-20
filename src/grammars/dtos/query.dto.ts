import { toBoolean } from '@/common/utils';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => toNumber(value))
  page: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => toNumber(value))
  limit: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => toBoolean(value))
  haveTheory: boolean;
}
