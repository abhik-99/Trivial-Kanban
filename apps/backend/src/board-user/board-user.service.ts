import { Injectable } from '@nestjs/common';
import { RemoveBoardUserInput } from './dto/remove-board-user.input';
import { AddBoardUserInput } from './dto/add-board-user.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';

@Injectable()
export class BoardUserService {
  constructor(private prisma: PrismaRenderService) {}
  create(addBoardUserInput: AddBoardUserInput) {
    return this.prisma.boardUser.create({
      data: {
        userId: addBoardUserInput.userId,
        board: {
          connect: {
            id: addBoardUserInput.boardId
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.boardUser.findMany({include: { board: true}});
  }

  remove({userId, boardId}: RemoveBoardUserInput) {
    return this.prisma.boardUser.delete({ where: {userId_boardId: { userId, boardId}}});
  }
}
