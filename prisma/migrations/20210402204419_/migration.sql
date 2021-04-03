/*
  Warnings:

  - You are about to drop the column `photos` on the `ImgContent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ImgContent" DROP COLUMN "photos";

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "imgContentId" INTEGER,
    "photos" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD FOREIGN KEY ("imgContentId") REFERENCES "ImgContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
