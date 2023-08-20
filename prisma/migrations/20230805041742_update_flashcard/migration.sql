/*
  Warnings:

  - You are about to drop the column `word_id` on the `flashcards` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_word_id_fkey";

-- AlterTable
ALTER TABLE "flashcards" DROP COLUMN "word_id";

-- AlterTable
ALTER TABLE "word_audios" ADD COLUMN     "flashcard_id" TEXT;

-- AddForeignKey
ALTER TABLE "word_audios" ADD CONSTRAINT "word_audios_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
