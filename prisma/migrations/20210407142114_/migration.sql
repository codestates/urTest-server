/*
  Warnings:

  - You are about to drop the column `photos` on the `Photo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contentId,userId]` on the table `BookMark` will be added. If there are existing duplicate values, this will fail.
  - Made the column `questionId` on table `Answer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `BookMark` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `BookMark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contentId` on table `BookMark` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contentId` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Content` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `photoUrl` to the `Photo` table without a default value. This is not possible if the table is not empty.
  - Made the column `contentId` on table `Photo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `photoName` on table `Photo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contentId` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "questionId" SET NOT NULL;

-- AlterTable
ALTER TABLE "BookMark" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "contentId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "contentId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Content" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "photos",
ADD COLUMN     "photoUrl" TEXT NOT NULL,
ALTER COLUMN "contentId" SET NOT NULL,
ALTER COLUMN "photoName" SET NOT NULL;

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "contentId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BookMark.contentId_userId_unique" ON "BookMark"("contentId", "userId");
