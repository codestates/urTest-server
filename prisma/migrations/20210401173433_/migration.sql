/*
  Warnings:

  - You are about to drop the column `name` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `BookMark` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookMark" DROP CONSTRAINT "BookMark_contentId_fkey";

-- DropForeignKey
ALTER TABLE "BookMark" DROP CONSTRAINT "BookMark_userId_fkey";

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD COLUMN     "file" TEXT NOT NULL,
ADD COLUMN     "caption" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "bio",
DROP COLUMN "avatar";

-- DropTable
DROP TABLE "BookMark";

-- CreateTable
CREATE TABLE "Hashtag" (
    "id" SERIAL NOT NULL,
    "hashtag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContentToHashtag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContentToHashtag_AB_unique" ON "_ContentToHashtag"("A", "B");

-- CreateIndex
CREATE INDEX "_ContentToHashtag_B_index" ON "_ContentToHashtag"("B");

-- AddForeignKey
ALTER TABLE "_ContentToHashtag" ADD FOREIGN KEY ("A") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContentToHashtag" ADD FOREIGN KEY ("B") REFERENCES "Hashtag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
