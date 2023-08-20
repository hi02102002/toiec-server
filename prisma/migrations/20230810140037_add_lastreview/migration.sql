-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_user_id_fkey";

-- AlterTable
ALTER TABLE "flashcards" ADD COLUMN     "last_reviewed" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
