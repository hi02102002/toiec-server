-- CreateTable
CREATE TABLE "choices" (
    "id" TEXT NOT NULL,
    "test_user_id" TEXT,
    "answerId" TEXT,

    CONSTRAINT "choices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "choices" ADD CONSTRAINT "choices_test_user_id_fkey" FOREIGN KEY ("test_user_id") REFERENCES "test_users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "choices" ADD CONSTRAINT "choices_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
