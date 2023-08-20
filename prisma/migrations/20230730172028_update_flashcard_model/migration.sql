-- AlterTable
ALTER TABLE "flashcards" ADD COLUMN     "definition" TEXT,
ADD COLUMN     "examples" TEXT[],
ADD COLUMN     "image" TEXT,
ADD COLUMN     "meaning" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "patchOfSpeech" TEXT,
ADD COLUMN     "pronunciation" TEXT;
