import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ColumnService } from './column.service';
import { CreateColumnInput } from './dto/create-column.input';
import { UpdateColumnInput } from './dto/update-column.input';

@Resolver('Column')
export class ColumnResolver {
  constructor(private readonly columnService: ColumnService) {}

  @Mutation('createColumn')
  create(@Args('createColumnInput') createColumnInput: CreateColumnInput) {
    return this.columnService.create(createColumnInput);
  }

  @Query('column')
  findAll() {
    return this.columnService.findAll();
  }

  @Query('column')
  findOne(@Args('id') id: number) {
    return this.columnService.findOne(id);
  }

  @Mutation('updateColumn')
  update(@Args('updateColumnInput') updateColumnInput: UpdateColumnInput) {
    return this.columnService.update(updateColumnInput.id, updateColumnInput);
  }

  @Mutation('removeColumn')
  remove(@Args('id') id: number) {
    return this.columnService.remove(id);
  }
}
