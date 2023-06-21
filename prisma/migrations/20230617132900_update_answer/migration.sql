/*
  Warnings:

  - You are about to drop the column `correct_answer` on the `answers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "correct_answer",
ADD COLUMN     "is_correct" BOOLEAN NOT NULL DEFAULT false;
