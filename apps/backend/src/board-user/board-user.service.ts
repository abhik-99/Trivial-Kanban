import { ForbiddenException, Injectable } from '@nestjs/common';
import { RemoveBoardUserInput } from './dto/remove-board-user.input';
import { AddBoardUserInput } from './dto/add-board-user.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';
import { Prisma } from '@prisma/render';

@Injectable()
export class BoardUserService {
  constructor(private prisma: PrismaRenderService) {}
  async create({ userId, boardId }: AddBoardUserInput, existingUserId: string) {
    try {
      await this.prisma.boardUser.findUniqueOrThrow({
        where: {
          userId_boardId: {
            userId: existingUserId,
            boardId,
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new ForbiddenException('User not authorized');
    }
    return this.prisma.boardUser.create({
      data: {
        userId,
        board: {
          connect: {
            id: boardId,
          },
        },
      },
    });
  }

  findAll(userId?: string, boardId?: string) {
    var filter: Prisma.BoardUserWhereInput = {}
    if (userId) filter = {...filter, userId}
    if(boardId) filter = {...filter, boardId}
    return this.prisma.boardUser.findMany({
        where: filter
    });
  }

  findAllUsingColumn(userId: string, columnId: string) {
    return this.prisma.boardUser.findMany({
      where: {
        userId,
        board: {
          is: {
            columns: {
              some: {
                id: columnId
              }
            }
          }
        }
      }
    })
  }

  findAllUsingCard(userId: string, cardId: string) {
    return this.prisma.boardUser.findMany({
      where: {
        userId,
        board: {
          is: {
            columns: {
              some: {
                cards: {
                  some: {
                    id: cardId
                  }
                }
              }
            }
          }
        }
      }
    })
  }

  async remove(
    { userId, boardId }: RemoveBoardUserInput,
    existingUserId: string,
  ) {
    try {
      await this.prisma.boardUser.findUniqueOrThrow({
        where: {
          userId_boardId: {
            userId: existingUserId,
            boardId,
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new ForbiddenException('User not authorized');
    }
    return this.prisma.boardUser.delete({
      where: { userId_boardId: { userId, boardId } },
    });
  }
}
