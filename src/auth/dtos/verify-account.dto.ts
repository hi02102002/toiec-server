import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { toNumber } from 'lodash';

export class VerifyAccountDto {
  @IsNumber()
  @IsNotEmpty({
    message: 'Code is required',
  })
  @Transform(({ value }) => toNumber(value))
  code: number;
}
