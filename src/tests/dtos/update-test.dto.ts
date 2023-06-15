import { IsOptional, IsString } from 'class-validator';

export class UpdateTestDto {
  @IsString()
  @IsOptional()
  name: string;
}
