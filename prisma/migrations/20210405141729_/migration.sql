/*
  Warnings:

  - You are about to drop the column `body` on the `Question` table. All the data in the column will be lost.
  - Added the required column `questionBody` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "body",
ADD COLUMN     "questionBody" TEXT NOT NULL;
