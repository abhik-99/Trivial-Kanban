import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateColumnInput } from './dto/create-column.input';
import { UpdateColumnInput } from './dto/update-column.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';
import { BoardUserService } from 'src/board-user/board-user.service';
import { Prisma } from '@prisma/render';

@Injectable()
export class ColumnService {
  constructor(
    private prisma: PrismaRenderService,
    private readonly boardUserService: BoardUserService,
  ) {}

  async create(
    { boardId, ...createColumnInput }: CreateColumnInput,
    userId: string,
  ) {
    const boardUser = await this.boardUserService.findAll(userId, boardId);
    if (boardUser.length === 0)
      throw new ForbiddenException('User not authorized');

    return this.prisma.column.create({
      data: { ...createColumnInput, board: { connect: { id: boardId } } },
    });
  }

  async findAll(where: Prisma.ColumnWhereInput) {
    return this.prisma.column.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.column.findUniqueOrThrow({ where: { id } });
  }

  update({ id, ...updateColumnInput }: UpdateColumnInput, userId: string) {
    return this.prisma.column.update({
      where: { id, board: { boardUsers: { some: { userId } } } },
      data: updateColumnInput,
    });
  }

  remove(id: string, createdBy: string) {
    return this.prisma.column.delete({where: {
      id,
      board: {
        createdBy
      }
    }});
  }
}
