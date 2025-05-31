/*
  Warnings:

  - You are about to drop the `SermonBlockImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SermonBlockImage" DROP CONSTRAINT "SermonBlockImage_image_id_fkey";

-- DropForeignKey
ALTER TABLE "SermonBlockImage" DROP CONSTRAINT "SermonBlockImage_sermons_block_id_fkey";

-- DropTable
DROP TABLE "SermonBlockImage";

-- CreateTable
CREATE TABLE "sermon_block_images" (
    "id" BIGSERIAL NOT NULL,
    "sermons_block_id" BIGINT NOT NULL,
    "image_id" BIGINT NOT NULL,
    "order" BIGINT NOT NULL,

    CONSTRAINT "sermon_block_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sermon_block_images" ADD CONSTRAINT "sermon_block_images_sermons_block_id_fkey" FOREIGN KEY ("sermons_block_id") REFERENCES "sermon_blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sermon_block_images" ADD CONSTRAINT "sermon_block_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
