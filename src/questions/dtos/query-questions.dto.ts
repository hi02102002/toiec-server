import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from 'lodash';
export class QueryQuestionsDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  page: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  limit: number;

  @IsOptional()
  @IsString()
  partId: string;

  @IsOptional()
  @IsString()
  parentId: string;
}
