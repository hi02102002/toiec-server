/*
  Warnings:

  - The primary key for the `count_flashcard_learneds` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `count_flashcard_learneds` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `deck_id` on table `count_flashcard_learneds` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "count_flashcard_learneds" DROP CONSTRAINT "count_flashcard_learneds_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "deck_id" SET NOT NULL,
ADD CONSTRAINT "count_flashcard_learneds_pkey" PRIMARY KEY ("id");
