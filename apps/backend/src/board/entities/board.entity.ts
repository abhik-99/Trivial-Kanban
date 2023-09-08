import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { BoardUser } from 'src/board-user/entities/board-user.entity';

@ObjectType()
export class Board {
  @Field(() => ID)
  id:string

  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @Field(() => GraphQLISODateTime)
  updatedAt: string

  @Field(() => String)
  boardName:string

  @Field(() => String)
  boardDescription:string

  @Field(() => ID)
  createdBy:string

  @Field(() => [BoardUser], {nullable: 'itemsAndList'})
  boardUsers: BoardUser[]
}
