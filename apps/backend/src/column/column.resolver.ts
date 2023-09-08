import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ColumnService } from './column.service';
import { CreateColumnInput } from './dto/create-column.input';
import { UpdateColumnInput } from './dto/update-column.input';
import { Column } from './entities/column.entity';
import { GraphQLUser } from 'src/decorators';
import { BoardService } from 'src/board/board.service';
import { CardService } from 'src/card/card.service';

@Resolver(() => Column)
export class ColumnResolver {
  constructor(
    private readonly columnService: ColumnService,
    private readonly boardService: BoardService,
    private readonly cardService: CardService
  ) {}

  @Mutation(() => Column, { name: 'createColumn' })
  create(
    @Args('createColumnInput') createColumnInput: CreateColumnInput,
    @GraphQLUser('sub') userId: string,
  ) {
    return this.columnService.create(createColumnInput, userId);
  }

  @Query(() => [Column], { name: 'columns' })
  findAll() {
    return this.columnService.findAll({});
  }

  @Query(() => Column, { name: 'column' })
  findOne(@Args('id') id: string) {
    return this.columnService.findOne(id);
  }

  @Mutation(() => Column, { name: 'updateColumn' })
  update(
    @Args('updateColumnInput') updateColumnInput: UpdateColumnInput,
    @GraphQLUser('sub') userId: string,
  ) {
    return this.columnService.update(updateColumnInput, userId);
  }

  @Mutation(() => Column, { name: 'removeColumn' })
  remove(@Args('id') id: string, @GraphQLUser('sub') userId: string) {
    return this.columnService.remove(id, userId);
  }

  @ResolveField()
  async board(@Parent() column: Column) {
    const { boardId } = column;
    return this.boardService.findOne(boardId);
  }

  @ResolveField()
  async cards(@Parent() column: Column) {
    const { id } = column;
    return this.cardService.findAll({columnId: id});
  }
}
