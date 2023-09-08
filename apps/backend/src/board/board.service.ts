import { Injectable } from '@nestjs/common';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';
import { Prisma } from '@prisma/render';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaRenderService) {}
  create(createBoardInput: CreateBoardInput, userId: string) {
    return this.prisma.board.create({
      data: {
        ...createBoardInput,
        createdBy: userId,
        boardUsers: {
          create: {
            userId,
          },
        },
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.board.findMany({
      where: {
        boardUsers: {
          some: {
            userId,
          },
        },
      },
    });
  }

  findOne(id: string, userId?: string) {
    const filter: Prisma.BoardWhereUniqueInput = {id}
    if(userId) filter.boardUsers = { some: { userId } }
    return this.prisma.board.findUniqueOrThrow({
      where: filter,
    });
  }

  update(
    id: string,
    { id: _id, ...updateBoardInput }: UpdateBoardInput,
    createdBy: string,
  ) {
    return this.prisma.board.update({
      where: {
        id,
        createdBy,
      },
      data: updateBoardInput,
    });
  }

  remove(id: string, createdBy: string) {
    return this.prisma.board.delete({
      where: {
        id,
        createdBy,
      },
    });
  }
}
