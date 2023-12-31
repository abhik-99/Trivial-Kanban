import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { BoardUser } from 'src/board-user/entities/board-user.entity';
import { Column } from 'src/column/entities/column.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Board {
  @Field(() => ID)
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @Field(() => GraphQLISODateTime)
  updatedAt: string;

  @Field(() => String)
  boardName: string;

  @Field(() => String)
  boardDescription: string;

  // @Field(() => ID)
  // createdBy: string;
  
  @Field(() => User)
  createdByUser: User;

  @Field(() => [Column], { nullable: 'itemsAndList' })
  columns: Column[];

  @Field(() => [BoardUser], { nullable: 'itemsAndList' })
  boardUsers: BoardUser[];
}
