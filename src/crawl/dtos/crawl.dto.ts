import { IsNumber, IsObject, IsString } from 'class-validator';

export class CrawlDto {
  @IsString()
  url: string;

  @IsObject()
  headers: Record<string, any>;

  @IsString()
  name: string;

  @IsNumber()
  maxPage?: number;
}
