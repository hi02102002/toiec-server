import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeckFromTopicDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  topicId: string;
}
