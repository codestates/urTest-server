/*
  Warnings:

  - You are about to drop the `Photo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_imgContentId_fkey";

-- AlterTable
ALTER TABLE "ImgContent" ADD COLUMN     "photos" TEXT;

-- DropTable
DROP TABLE "Photo";
