-- CreateTable
CREATE TABLE "Sermons" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Sermons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleSections" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sermon_id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "ArticleSections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleSectionImage" (
    "id" TEXT NOT NULL,
    "article_SectionIid" TEXT NOT NULL,
    "image_id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "ArticleSectionImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ArticleSections" ADD CONSTRAINT "ArticleSections_sermon_id_fkey" FOREIGN KEY ("sermon_id") REFERENCES "Sermons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleSectionImage" ADD CONSTRAINT "ArticleSectionImage_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
