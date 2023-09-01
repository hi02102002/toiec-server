import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

type Word = {
  name: string;
  patchOfSpeech: string;
  pronunciation: string;
  audios: Array<{
    region: string;
    src: string;
  }>;
  definition: string;
  note: string;
  meaning: string;
  image: string;
  examples: string[];
};

export class ImportWordsDto {
  @IsString()
  @IsNotEmpty()
  topicId: string;

  @IsArray()
  @ArrayMinSize(1)
  words: Word[];
}
