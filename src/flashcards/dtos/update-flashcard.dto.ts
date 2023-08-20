import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateFlashcardDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  definition: string;

  @IsString()
  @IsOptional()
  meaning: string;

  @IsArray()
  @IsOptional()
  examples: string[];

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  patchOfSpeech: string;

  @IsString()
  @IsOptional()
  note: string;

  @IsString()
  @IsOptional()
  pronunciation: string;

  @IsString()
  @IsOptional()
  lastReviewed: string;
}
