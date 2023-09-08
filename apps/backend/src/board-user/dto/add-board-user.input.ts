import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsUUID } from "class-validator";

@InputType()
export class AddBoardUserInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  boardId: string;
}