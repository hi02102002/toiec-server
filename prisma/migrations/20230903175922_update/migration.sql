/*
  Warnings:

  - You are about to drop the column `token` on the `code_tokens` table. All the data in the column will be lost.
  - Added the required column `code` to the `code_tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secret` to the `code_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "code_tokens" DROP COLUMN "token",
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "secret" TEXT NOT NULL;
