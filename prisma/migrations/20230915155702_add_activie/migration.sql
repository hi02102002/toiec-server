/*
  Warnings:

  - You are about to drop the `streaks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "streaks" DROP CONSTRAINT "streaks_user_id_fkey";

-- DropTable
DROP TABLE "streaks";

-- CreateTable
CREATE TABLE "Ativity" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Ativity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ativity" ADD CONSTRAINT "Ativity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
