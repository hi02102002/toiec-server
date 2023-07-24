import { IsArray, IsString } from 'class-validator';

export class DeleteGrammarsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}
