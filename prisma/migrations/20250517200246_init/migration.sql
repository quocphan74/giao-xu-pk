/*
  Warnings:

  - You are about to drop the `news_block` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "news_block" DROP CONSTRAINT "news_block_news_id_fkey";

-- DropForeignKey
ALTER TABLE "news_block_images" DROP CONSTRAINT "news_block_images_news_block_id_fkey";

-- DropTable
DROP TABLE "news_block";

-- CreateTable
CREATE TABLE "news_blocks" (
    "id" BIGSERIAL NOT NULL,
    "news_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" BIGINT NOT NULL,

    CONSTRAINT "news_blocks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "news_blocks" ADD CONSTRAINT "news_blocks_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_block_images" ADD CONSTRAINT "news_block_images_news_block_id_fkey" FOREIGN KEY ("news_block_id") REFERENCES "news_blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
