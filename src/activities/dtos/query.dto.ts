import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
export class QueryDto {
  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  dateStart: Date;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  dateEnd: Date;

  @IsString()
  userId: string;
}
