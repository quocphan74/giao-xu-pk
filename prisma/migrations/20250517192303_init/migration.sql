/*
  Warnings:

  - You are about to drop the `ArticleSectionImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticleSections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `News` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewsContent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewsContentImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sermons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArticleSectionImage" DROP CONSTRAINT "ArticleSectionImage_image_id_fkey";

-- DropForeignKey
ALTER TABLE "ArticleSections" DROP CONSTRAINT "ArticleSections_sermon_id_fkey";

-- DropForeignKey
ALTER TABLE "NewsContent" DROP CONSTRAINT "NewsContent_new_id_fkey";

-- DropForeignKey
ALTER TABLE "NewsContentImage" DROP CONSTRAINT "NewsContentImage_image_id_fkey";

-- DropForeignKey
ALTER TABLE "NewsContentImage" DROP CONSTRAINT "NewsContentImage_news_content_id_fkey";

-- DropTable
DROP TABLE "ArticleSectionImage";

-- DropTable
DROP TABLE "ArticleSections";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "News";

-- DropTable
DROP TABLE "NewsContent";

-- DropTable
DROP TABLE "NewsContentImage";

-- DropTable
DROP TABLE "Sermons";

-- CreateTable
CREATE TABLE "news" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "is_published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_block" (
    "id" BIGSERIAL NOT NULL,
    "news_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "news_block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_block_images" (
    "id" BIGSERIAL NOT NULL,
    "news_block_id" BIGINT NOT NULL,
    "image_id" BIGINT NOT NULL,
    "order" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "news_block_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" BIGSERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "news_block_images_image_id_idx" ON "news_block_images"("image_id");

-- AddForeignKey
ALTER TABLE "news_block" ADD CONSTRAINT "news_block_news_id_fkey" FOREIGN KEY ("news_id") REFERENCES "news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_block_images" ADD CONSTRAINT "news_block_images_news_block_id_fkey" FOREIGN KEY ("news_block_id") REFERENCES "news_block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
