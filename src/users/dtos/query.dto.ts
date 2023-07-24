import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  page: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  limit: number;

  @IsString()
  @IsOptional()
  status: 'ALL' | 'BLOCKED' | 'ACTIVE';

  @IsString()
  @IsOptional()
  name: string;
}
