import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Board } from "src/board/entities/board.entity";
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class BoardUser {
  @Field(() => User)
  user: User;

  @Field(() => Board)
  board: Board
}
