import { PartType } from '@prisma/client';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

type Question = {
  image: string;
  audio: string;
  text: string;
  explain: string;
  transcript: string;
  answers: {
    content: string;
    isCorrect: boolean;
  }[];
  questions: Array<Question>;
};

export class ImportJsonDto {
  @IsString()
  @IsNotEmpty()
  testId: string;

  @IsString()
  @IsNotEmpty()
  partId: string;

  @IsArray()
  @ArrayMinSize(1)
  questions: Question[];

  @IsEnum(PartType)
  partType: PartType;
}
