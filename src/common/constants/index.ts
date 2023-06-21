import { PartType } from '@prisma/client';

export const LIMIT_QUESTIONS_PART: Record<keyof typeof PartType, number> = {
  PART1: 6,
  PART2: 25,
  PART3: 39,
  PART4: 30,
  PART5: 30,
  PART6: 16,
  PART7: 54,
};
