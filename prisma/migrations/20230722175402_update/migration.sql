/*
  Warnings:

  - You are about to drop the column `pronunciation` on the `word_audios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "word_audios" DROP COLUMN "pronunciation";

-- AlterTable
ALTER TABLE "words" ADD COLUMN     "pronunciation" TEXT;
