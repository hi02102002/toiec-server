import { toBoolean } from '@/common/utils';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toLower, toNumber, trim } from 'lodash';

export class QueryDto {
  @Transform(({ value }) => toLower(trim(value)))
  @IsString()
  @IsOptional()
  name: string;

  @Transform(({ value }) => toNumber(value))
  @IsNumber()
  @IsOptional()
  limit: number;

  @Transform(({ value }) => toNumber(value))
  @IsNumber()
  @IsOptional()
  page: number;

  @IsString()
  @IsOptional()
  orderBy: string;

  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  asc: boolean;
}
