import { Injectable } from '@nestjs/common';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { PrismaRenderService } from 'src/prisma-render/prisma-render.service';
import { Prisma } from '@prisma/render';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaRenderService) {}
  async create(
    { columnId, ...createCardInput }: CreateCardInput,
    createdBy: string,
  ) {
    const cardNumber = await this.prisma.card.count({
      where: { column: { board: { columns: { some: { id: columnId } } } } },
    });
    return this.prisma.card.create({
      data: {
        ...createCardInput,
        column: { connect: { id: columnId } },
        cardNumber,
        createdBy,
      },
    });
  }

  findAll(where: Prisma.CardWhereInput) {
    return this.prisma.card.findMany({where});
  }

  findOne(id: string) {
    return this.prisma.card.findUniqueOrThrow({where: {id}});
  }

  update(id: string, {columnId, ...updateCardInput}: UpdateCardInput) {
    var data: Prisma.CardUpdateInput = {...updateCardInput}
    if(columnId) data.column = {connect: {id: columnId}}
    return this.prisma.card.update({where: {id}, data});
  }

  remove(id: string) {
    return this.prisma.card.delete({where: {id}});
  }
}
