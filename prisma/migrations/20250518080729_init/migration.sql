/*
  Warnings:

  - You are about to drop the `_ImagesToNewsBlockImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ImagesToNewsBlockImages" DROP CONSTRAINT "_ImagesToNewsBlockImages_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImagesToNewsBlockImages" DROP CONSTRAINT "_ImagesToNewsBlockImages_B_fkey";

-- DropTable
DROP TABLE "_ImagesToNewsBlockImages";

-- AddForeignKey
ALTER TABLE "news_block_images" ADD CONSTRAINT "news_block_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
