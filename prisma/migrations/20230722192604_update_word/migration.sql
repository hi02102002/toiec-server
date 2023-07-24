/*
  Warnings:

  - You are about to drop the column `partOfSpeech` on the `words` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "words" DROP COLUMN "partOfSpeech",
ADD COLUMN     "patchOfSpeech" TEXT;
