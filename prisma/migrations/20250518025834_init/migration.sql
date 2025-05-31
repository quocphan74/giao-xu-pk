-- DropIndex
DROP INDEX "news_block_images_image_id_idx";

-- AddForeignKey
ALTER TABLE "news_block_images" ADD CONSTRAINT "news_block_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
