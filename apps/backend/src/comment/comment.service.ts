import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';
import { Prisma } from '@prisma/render';
import { BoardUserService } from 'src/board-user/board-user.service';

@Injectable()
export class CommentService {
  constructor(
    private prisma: PrismaRenderService,
    private boardUserService: BoardUserService,
  ) {}
  async create(createCommentInput: CreateCommentInput, userId: string) {
    const boardUser = await this.boardUserService.findAllUsingCard(
      userId,
      createCommentInput.cardId,
    );
    if (!boardUser || boardUser.length === 0)
      throw new ForbiddenException('User not authorized');
    return this.prisma.comment.create({
      data: {
        body: createCommentInput.body,
        card: {
          connect: {
            id: createCommentInput.cardId,
          },
        },
        createdBy: userId,
      },
    });
  }

  findAll(where: Prisma.CommentWhereInput) {
    return this.prisma.comment.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.comment.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, { body }: UpdateCommentInput, userId: string) {
    return this.prisma.comment.update({
      where: {
        id,
        createdBy: userId,
      },
      data: {
        body,
      },
    });
  }

  remove(id: string, userId: string) {
    return this.prisma.comment.delete({ where: { id, createdBy: userId } });
  }
}
