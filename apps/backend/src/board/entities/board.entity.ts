import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

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

  @Field(() => String)
  createdBy:string
}
