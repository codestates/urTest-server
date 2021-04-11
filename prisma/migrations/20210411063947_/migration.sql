-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "winCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "winCount" INTEGER NOT NULL DEFAULT 0;
