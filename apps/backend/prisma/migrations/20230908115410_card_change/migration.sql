-- DropForeignKey
ALTER TABLE "BoardUser" DROP CONSTRAINT "BoardUser_boardId_fkey";

-- AddForeignKey
ALTER TABLE "BoardUser" ADD CONSTRAINT "BoardUser_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE;
