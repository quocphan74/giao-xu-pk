-- CreateTable
CREATE TABLE "sermons" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "preacher_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sermons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sermon_blocks" (
    "id" BIGSERIAL NOT NULL,
    "sermons_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" BIGINT NOT NULL,

    CONSTRAINT "sermon_blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SermonBlockImage" (
    "id" BIGSERIAL NOT NULL,
    "sermons_block_id" BIGINT NOT NULL,
    "image_id" BIGINT NOT NULL,
    "order" BIGINT NOT NULL,

    CONSTRAINT "SermonBlockImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sermon_blocks" ADD CONSTRAINT "sermon_blocks_sermons_id_fkey" FOREIGN KEY ("sermons_id") REFERENCES "sermons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SermonBlockImage" ADD CONSTRAINT "SermonBlockImage_sermons_block_id_fkey" FOREIGN KEY ("sermons_block_id") REFERENCES "sermon_blocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SermonBlockImage" ADD CONSTRAINT "SermonBlockImage_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
