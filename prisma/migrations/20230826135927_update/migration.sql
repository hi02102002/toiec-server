/*
  Warnings:

  - A unique constraint covering the columns `[deck_id,date]` on the table `count_flashcard_learneds` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "count_flashcard_learneds_deck_id_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "count_flashcard_learneds_deck_id_date_key" ON "count_flashcard_learneds"("deck_id", "date");
