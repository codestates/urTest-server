-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "questionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "contentId" DROP NOT NULL;
