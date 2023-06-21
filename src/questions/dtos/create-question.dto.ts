import { PartType } from '@prisma/client';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsOptional()
  audio: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  parentId: string | null;

  @IsString()
  @IsOptional()
  partId: string;

  @IsString()
  @IsOptional()
  partType: keyof typeof PartType;

  @IsString()
  @IsOptional()
  explain: string;

  @IsString()
  @IsOptional()
  transcript: string;

  @IsArray()
  @IsOptional()
  answers: Array<{
    content: string;
    isCorrect: boolean;
  }>;
}
