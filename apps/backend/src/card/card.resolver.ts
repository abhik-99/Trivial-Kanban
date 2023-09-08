import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { UseInterceptors } from '@nestjs/common';
import { CardInterceptor } from 'src/interceptors/card.interceptor';
import { GraphQLUser } from 'src/decorators';
import { ColumnService } from 'src/column/column.service';
import { Column } from 'src/column/entities/column.entity';

@UseInterceptors(new CardInterceptor())
@Resolver(() => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService, private readonly columnService:ColumnService) {}

  @Mutation(() => Card)
  createCard(@Args('createCardInput') createCardInput: CreateCardInput, @GraphQLUser('sub') userId: string) {
    return this.cardService.create(createCardInput, userId);
  }

  @Query(() => [Card], { name: 'cards' })
  findAll(@Args('columnId', { type: () => String }) columnId: string) {
    return this.cardService.findAll({columnId});
  }

  @Query(() => Card, { name: 'card' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.cardService.findOne(id);
  }

  @Mutation(() => Card)
  updateCard(@Args('updateCardInput') updateCardInput: UpdateCardInput) {
    return this.cardService.update(updateCardInput.id, updateCardInput);
  }

  @Mutation(() => Card)
  removeCard(@Args('id', { type: () => String }) id: string) {
    return this.cardService.remove(id);
  }

  @ResolveField('column', (returns) => Column)
  getColumn(@Parent() card: Card) {
    return this.columnService.findAll({id:card.columnId})
    
  }
}
