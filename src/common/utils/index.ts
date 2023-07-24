import { PartType } from '@prisma/client';

export * from './expressFileToBlob';

export const toBoolean = (value: string) => {
  return value === 'true' || value === '1' ? true : false;
};
export const isListening = (partType: PartType) => {
  return (
    partType === PartType.PART1 ||
    PartType.PART2 ||
    PartType.PART3 ||
    partType === PartType.PART4
  );
};
