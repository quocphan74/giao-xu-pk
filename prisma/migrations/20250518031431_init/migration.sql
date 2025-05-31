-- DropForeignKey
ALTER TABLE "news_block_images" DROP CONSTRAINT "news_block_images_image_id_fkey";

-- CreateTable
CREATE TABLE "_ImagesToNewsBlockImages" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_ImagesToNewsBlockImages_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ImagesToNewsBlockImages_B_index" ON "_ImagesToNewsBlockImages"("B");

-- AddForeignKey
ALTER TABLE "_ImagesToNewsBlockImages" ADD CONSTRAINT "_ImagesToNewsBlockImages_A_fkey" FOREIGN KEY ("A") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImagesToNewsBlockImages" ADD CONSTRAINT "_ImagesToNewsBlockImages_B_fkey" FOREIGN KEY ("B") REFERENCES "news_block_images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
