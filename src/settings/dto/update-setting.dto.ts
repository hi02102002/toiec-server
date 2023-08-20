import { toBoolean } from '@/common/utils';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class UpdateSettingDto {
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  maxFlashcardPerDay: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  maxReviewPerDay: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => toBoolean(value))
  autoPlayAudio: boolean;
}
