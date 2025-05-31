-- AlterTable
ALTER TABLE "news" ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "news_blocks" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sermon_blocks" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sermons" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "preacher_name" DROP NOT NULL,
ALTER COLUMN "deleted_at" DROP NOT NULL;
