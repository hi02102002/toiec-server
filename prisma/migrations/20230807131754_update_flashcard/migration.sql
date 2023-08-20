/*
  Warnings:

  - You are about to drop the column `last_review` on the `flashcards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "flashcards" DROP COLUMN "last_review",
ADD COLUMN     "due" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "public_id" TEXT NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "files" ADD CONSTRAINT "files_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
