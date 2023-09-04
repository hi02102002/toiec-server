-- CreateTable
CREATE TABLE "code_tokens" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expired_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "code_tokens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "code_tokens" ADD CONSTRAINT "code_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
