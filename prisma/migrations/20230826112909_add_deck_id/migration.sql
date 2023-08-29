-- AddForeignKey
ALTER TABLE "count_flashcard_learneds" ADD CONSTRAINT "count_flashcard_learneds_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
