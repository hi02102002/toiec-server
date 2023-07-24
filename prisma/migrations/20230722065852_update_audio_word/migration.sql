/*
  Warnings:

  - You are about to drop the column `pronunciation` on the `words` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "word_audios" ADD COLUMN     "pronunciation" TEXT;

-- AlterTable
ALTER TABLE "words" DROP COLUMN "pronunciation";
