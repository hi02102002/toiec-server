/*
  Warnings:

  - You are about to drop the column `desk_id` on the `flashcards` table. All the data in the column will be lost.
  - Added the required column `deck_id` to the `flashcards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_desk_id_fkey";

-- AlterTable
ALTER TABLE "flashcards" DROP COLUMN "desk_id",
ADD COLUMN     "deck_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
