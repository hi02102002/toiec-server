-- CreateTable
CREATE TABLE "setting_learns" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "max_flashcard_per_day" INTEGER NOT NULL DEFAULT 20,
    "max_review_per_day" INTEGER NOT NULL DEFAULT 200,
    "is_shuffle" BOOLEAN NOT NULL DEFAULT false,
    "auto_play_audio" BOOLEAN NOT NULL DEFAULT false,
    "time_per_flashcard" INTEGER NOT NULL DEFAULT 60,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "setting_learns_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setting_learns_user_id_key" ON "setting_learns"("user_id");

-- AddForeignKey
ALTER TABLE "setting_learns" ADD CONSTRAINT "setting_learns_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
