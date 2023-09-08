import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { Board } from 'src/board/entities/board.entity';
import { Card } from 'src/card/entities/card.entity';

@ObjectType()
export class Column {
  @Field(() => ID)
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => String)
  columnName: string;
  @Field(() => String)
  columnDescription: string;

  @Field(() => Board)
  board: Board;

  @Field(() => String)
  boardId: string;

  @Field(() => [Card], {nullable: 'itemsAndList'})
  cards: Card[];
}
