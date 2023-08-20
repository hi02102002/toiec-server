import { IsOptional, IsString } from 'class-validator';
export class QueryChartDto {
  @IsOptional()
  @IsString()
  deckId: string;

  @IsOptional()
  @IsString()
  dateStart: string;

  @IsOptional()
  @IsString()
  dateEnd: string;
}
