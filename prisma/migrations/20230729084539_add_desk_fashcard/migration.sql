/*
  Warnings:

  - You are about to drop the column `user_id` on the `flashcards` table. All the data in the column will be lost.
  - Added the required column `desk_id` to the `flashcards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_user_id_fkey";

-- AlterTable
ALTER TABLE "flashcards" DROP COLUMN "user_id",
ADD COLUMN     "desk_id" TEXT NOT NULL,
ADD COLUMN     "efactor" DOUBLE PRECISION DEFAULT 2.5,
ADD COLUMN     "interval" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "last_review" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "n" INTEGER DEFAULT 0;

-- CreateTable
CREATE TABLE "Desk" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Desk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Desk" ADD CONSTRAINT "Desk_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_desk_id_fkey" FOREIGN KEY ("desk_id") REFERENCES "Desk"("id") ON DELETE CASCADE ON UPDATE CASCADE;
