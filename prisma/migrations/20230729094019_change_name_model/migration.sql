/*
  Warnings:

  - You are about to drop the `Desk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Desk" DROP CONSTRAINT "Desk_user_id_fkey";

-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_desk_id_fkey";

-- DropTable
DROP TABLE "Desk";

-- CreateTable
CREATE TABLE "Deck" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_desk_id_fkey" FOREIGN KEY ("desk_id") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
