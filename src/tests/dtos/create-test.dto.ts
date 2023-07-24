import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  audio: string;
}
