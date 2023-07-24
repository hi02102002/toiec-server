import { WordAudio } from '@prisma/client';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateWordDto {
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

  @IsArray()
  @IsOptional()
  audios: Array<WordAudio>;

  @IsString()
  @IsOptional()
  pronunciation: string;
}
