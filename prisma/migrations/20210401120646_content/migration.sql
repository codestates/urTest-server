/*
  Warnings:

  - Added the required column `contentId` to the `BookMark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookMark" ADD COLUMN     "contentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookMark" ADD FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
