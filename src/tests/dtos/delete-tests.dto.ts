import { IsArray, IsNotEmpty } from 'class-validator';

export class DeleteTestsDto {
  @IsArray()
  @IsNotEmpty()
  ids: string[];
}
