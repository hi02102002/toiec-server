import { TChoice } from '@/common/types';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class SubmitTestDto {
  @IsString()
  @IsNotEmpty()
  testId: string;

  @IsArray()
  choices: Array<TChoice>;
}
