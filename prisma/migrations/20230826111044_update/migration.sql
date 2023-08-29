/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `count_flashcard_learneds` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "count_flashcard_learneds" ADD COLUMN     "deck_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "count_flashcard_learneds_date_key" ON "count_flashcard_learneds"("date");
