/*
  Warnings:

  - You are about to drop the column `explanation` on the `answers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "explanation";

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "explain" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "transcript" TEXT NOT NULL DEFAULT '';
