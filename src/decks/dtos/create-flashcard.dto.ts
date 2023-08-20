import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateFlashcardDto {
  @IsString()
  @IsOptional()
  wordId: string;

  @IsString()
  @IsOptional()
  deckId: string;

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
  audios: Array<{
    src: string;
    region: string;
  }>;

  @IsString()
  @IsOptional()
  pronunciation: string;
}
