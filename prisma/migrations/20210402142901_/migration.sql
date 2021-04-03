/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hashtag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContentToHashtag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Content" DROP CONSTRAINT "Content_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToHashtag" DROP CONSTRAINT "_ContentToHashtag_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContentToHashtag" DROP CONSTRAINT "_ContentToHashtag_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "grade" TEXT NOT NULL DEFAULT E'user';

-- DropTable
DROP TABLE "Content";

-- DropTable
DROP TABLE "Hashtag";

-- DropTable
DROP TABLE "_ContentToHashtag";

-- CreateTable
CREATE TABLE "ImgContent" (
    "id" SERIAL NOT NULL,
    "imgTitle" TEXT NOT NULL,
    "imgSub" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "imgContentId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookMark" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "imgContentId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "imgContentId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImgContent" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD FOREIGN KEY ("imgContentId") REFERENCES "ImgContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMark" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMark" ADD FOREIGN KEY ("imgContentId") REFERENCES "ImgContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("imgContentId") REFERENCES "ImgContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
