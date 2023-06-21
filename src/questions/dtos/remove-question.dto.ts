import { IsArray, IsString } from 'class-validator';

export class RemoveQuestionsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}
