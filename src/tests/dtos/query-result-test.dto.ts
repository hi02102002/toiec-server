import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { toNumber } from 'lodash';

export class QueryResultTestDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  page: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => toNumber(value))
  limit: number;
}
