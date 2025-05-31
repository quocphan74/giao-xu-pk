/*
  Warnings:

  - You are about to drop the column `sermons_block_id` on the `sermon_block_images` table. All the data in the column will be lost.
  - You are about to drop the column `sermons_id` on the `sermon_blocks` table. All the data in the column will be lost.
  - Added the required column `sermon_block_id` to the `sermon_block_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sermon_id` to the `sermon_blocks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sermon_block_images" DROP CONSTRAINT "sermon_block_images_sermons_block_id_fkey";

-- DropForeignKey
ALTER TABLE "sermon_blocks" DROP CONSTRAINT "sermon_blocks_sermons_id_fkey";

-- AlterTable
ALTER TABLE "sermon_block_images" DROP COLUMN "sermons_block_id",
ADD COLUMN     "sermon_block_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "sermon_blocks" DROP COLUMN "sermons_id",
ADD COLUMN     "sermon_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "sermon_blocks" ADD CONSTRAINT "sermon_blocks_sermon_id_fkey" FOREIGN KEY ("sermon_id") REFERENCES "sermons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sermon_block_images" ADD CONSTRAINT "sermon_block_images_sermon_block_id_fkey" FOREIGN KEY ("sermon_block_id") REFERENCES "sermon_blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
