import { toBoolean } from '@/common/utils';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryTopicDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  parentId: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  page: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  limit: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => toBoolean(value))
  haveChild: boolean;
}
