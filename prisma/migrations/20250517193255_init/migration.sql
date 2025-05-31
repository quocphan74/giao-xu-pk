/*
  Warnings:

  - You are about to drop the column `created_at` on the `news_block` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `news_block` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `news_block` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `news_block_images` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `news_block_images` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `news_block_images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "news_block" DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "news_block_images" DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "updated_at";
