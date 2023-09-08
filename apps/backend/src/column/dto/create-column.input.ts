import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateColumnInput {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  boardId: string;

  @IsNotEmpty()
  @Field(() => String)
  columnName: string;

  @IsNotEmpty()
  @Field(() => String)
  columnDescription: string;
}
