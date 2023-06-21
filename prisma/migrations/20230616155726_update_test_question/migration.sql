-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "TestStatus" AS ENUM ('PUBLIC', 'DRAFT', 'PRIVATE');

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "national_test_id" TEXT,
ALTER COLUMN "part_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "status" "TestStatus" NOT NULL DEFAULT 'PUBLIC';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "national_tests" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "national_tests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_national_test_id_fkey" FOREIGN KEY ("national_test_id") REFERENCES "national_tests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
