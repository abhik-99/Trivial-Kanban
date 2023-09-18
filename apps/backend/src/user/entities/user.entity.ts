import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Board } from 'src/board/entities/board.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => GraphQLISODateTime)
  emailVerified: Date;

  @Field(() => String)
  image: string;

  @Field(() => [Board])
  boardsCreated: [Board]
}
