/*
  Warnings:

  - You are about to drop the `TestUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestUser" DROP CONSTRAINT "TestUser_testId_fkey";

-- DropForeignKey
ALTER TABLE "TestUser" DROP CONSTRAINT "TestUser_userId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "provider" SET DEFAULT 'local';

-- DropTable
DROP TABLE "TestUser";

-- CreateTable
CREATE TABLE "test_users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "number_correct" INTEGER NOT NULL,
    "poitn" INTEGER NOT NULL,
    "test_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "test_users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "test_users" ADD CONSTRAINT "test_users_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_users" ADD CONSTRAINT "test_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
