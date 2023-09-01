-- AlterTable
ALTER TABLE "decks" ADD COLUMN     "topic_id" TEXT;

-- AddForeignKey
ALTER TABLE "decks" ADD CONSTRAINT "decks_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "topics"("id") ON DELETE SET NULL ON UPDATE CASCADE;
