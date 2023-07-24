/*
  Warnings:

  - You are about to drop the column `number_correct` on the `test_users` table. All the data in the column will be lost.
  - You are about to drop the column `poitn` on the `test_users` table. All the data in the column will be lost.
  - Added the required column `listening_correct` to the `test_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listening_score` to the `test_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_attempt` to the `test_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading_correct` to the `test_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading_socre` to the `test_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_score` to the `test_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test_users" DROP COLUMN "number_correct",
DROP COLUMN "poitn",
ADD COLUMN     "listening_correct" INTEGER NOT NULL,
ADD COLUMN     "listening_score" INTEGER NOT NULL,
ADD COLUMN     "num_attempt" INTEGER NOT NULL,
ADD COLUMN     "reading_correct" INTEGER NOT NULL,
ADD COLUMN     "reading_socre" INTEGER NOT NULL,
ADD COLUMN     "total_score" INTEGER NOT NULL;
