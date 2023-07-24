import { toBoolean } from '@/common/utils';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  parentId: string;

  @IsBoolean()
  @Transform(({ value }) => toBoolean(value))
  hasChildren: boolean;
}
