import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Board } from "src/board/entities/board.entity";

@ObjectType()
export class BoardUser {
  @Field(() => ID)
  userId: string;

  @Field(() => Board)
  board: Board
}
