import { ObjectType, Field, Int, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Card } from 'src/card/entities/card.entity';

@ObjectType()
export class Comment {
  @Field(() => ID)
  id: string 

  @Field(() => GraphQLISODateTime)
  createdAt: Date;
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => ID)
  createdBy: string

  @Field(() => String)
  body: string

  @Field(() => Card)
  card: Card

  @Field(() => ID)
  cardId: Card
}
