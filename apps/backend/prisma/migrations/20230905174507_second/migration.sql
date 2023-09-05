/*
  Warnings:

  - Added the required column `createdBy` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "createdBy" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "BoardUser" (
    "userId" TEXT NOT NULL,
    "boardId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BoardUser_userId_boardId_key" ON "BoardUser"("userId", "boardId");

-- AddForeignKey
ALTER TABLE "BoardUser" ADD CONSTRAINT "BoardUser_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
