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

export const SCORE_TOIEC_READING = (numQuestionCorrect: number): number => {
  const map: Record<number, number> = {
    0: 5,
    1: 5,
    2: 5,
  };

  let sum = 5;
  for (let i = 3; i <= 100; i++) {
    sum += 5;
    map[i] = sum;
  }

  return map[numQuestionCorrect];
};

export const SCORE_TOIEC_LISTENING = (numQuestionCorrect: number): number => {
  const map: Record<number, number> = {
    96: 495,
    97: 495,
    98: 495,
    99: 495,
  };

  let sum = 0;
  for (let i = 0; i <= 95; i++) {
    sum += 5;
    map[i] = sum;
  }

  return map[numQuestionCorrect];
};
