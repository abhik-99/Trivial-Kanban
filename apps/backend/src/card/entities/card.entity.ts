import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { Priority, Status } from '@prisma/render';
import { Column } from 'src/column/entities/column.entity';
import { Comment } from 'src/comment/entities/comment.entity';

@ObjectType()
export class Card {
  @Field(() => ID)
  id: string;
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => Int)
  cardNumber: number;

  @Field(() => String)
  cardName: string;

  @Field(() => String)
  cardDescription: string;

  @Field(() => String)
  createdBy: string;

  @Field(() => String)
  assignedTo: string;

  @Field(() => Int)
  storyPoints: number;

  @Field(() => Priority)
  priority: Priority;

  @Field(() => Status)
  status: Status;

  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @Field(() => GraphQLISODateTime)
  endDate: Date;

  @Field(() => [Comment!]!)
  comments: Comment[];

  @Field(() => Column)
  column: Column;
}

registerEnumType(Priority, { name: 'Priority' });
registerEnumType(Status, { name: 'Status' });