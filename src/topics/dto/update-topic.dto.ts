import { IsOptional, IsString } from 'class-validator';

export class UpdateTopicDto {
  @IsString()
  @IsOptional()
  name: string;
}
