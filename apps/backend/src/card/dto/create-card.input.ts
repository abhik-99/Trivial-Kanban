import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';

import { Priority, Status } from '@prisma/render';

import {
  IsNotEmpty,
  IsUUID,
  IsNumber,
  IsEnum,
  IsDate,
} from 'class-validator';

@InputType()
export class CreateCardInput {
  @IsNotEmpty()
  @Field(() => String)
  cardName: string;

  @IsNotEmpty()
  @Field(() => String)
  cardDescription: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  assignedTo: string;

  @IsNumber()
  @Field(() => Int)
  storyPoints: number;

  @IsEnum(Priority)
  @Field(() => Priority)
  priority: Priority;

  @IsEnum(Status)
  @Field(() => Status)
  status: Status;

  @IsNotEmpty()
  @IsDate()
  @Field(() => GraphQLISODateTime)
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  @Field(() => GraphQLISODateTime)
  endDate: Date;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  columnId: string;
}
