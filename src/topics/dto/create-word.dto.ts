import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
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
