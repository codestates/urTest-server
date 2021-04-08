/*
  Warnings:

  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `password` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userId",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "desc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "winCount" INTEGER NOT NULL DEFAULT 0;
