/*
  Warnings:

  - You are about to drop the column `imgContentId` on the `BookMark` table. All the data in the column will be lost.
  - You are about to drop the column `imgContentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `imgContentId` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the `ImgContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImgContent" DROP CONSTRAINT "ImgContent_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookMark" DROP CONSTRAINT "BookMark_imgContentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_imgContentId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_imgContentId_fkey";

-- AlterTable
ALTER TABLE "BookMark" DROP COLUMN "imgContentId",
ADD COLUMN     "ContentId" INTEGER;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "imgContentId",
ADD COLUMN     "ContentId" INTEGER;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "imgContentId",
ADD COLUMN     "ContentId" INTEGER;

-- DropTable
DROP TABLE "ImgContent";

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Desc" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Content" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMark" ADD FOREIGN KEY ("ContentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("ContentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD FOREIGN KEY ("ContentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
