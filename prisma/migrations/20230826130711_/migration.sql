/*
  Warnings:

  - The primary key for the `count_flashcard_learneds` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[deck_id,id]` on the table `count_flashcard_learneds` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "count_flashcard_learneds" DROP CONSTRAINT "count_flashcard_learneds_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "count_flashcard_learneds_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "count_flashcard_learneds_deck_id_id_key" ON "count_flashcard_learneds"("deck_id", "id");
