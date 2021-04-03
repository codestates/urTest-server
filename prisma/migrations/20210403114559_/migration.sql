/*
  Warnings:

  - You are about to drop the column `ContentId` on the `BookMark` table. All the data in the column will be lost.
  - You are about to drop the column `ContentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `Desc` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `ContentId` on the `Photo` table. All the data in the column will be lost.
  - Added the required column `title` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookMark" DROP CONSTRAINT "BookMark_ContentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_ContentId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_ContentId_fkey";

-- AlterTable
ALTER TABLE "BookMark" DROP COLUMN "ContentId",
ADD COLUMN     "contentId" INTEGER;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "ContentId",
ADD COLUMN     "contentId" INTEGER;

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "Title",
DROP COLUMN "Desc",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "desc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "ContentId",
ADD COLUMN     "contentId" INTEGER;

-- AddForeignKey
ALTER TABLE "BookMark" ADD FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
