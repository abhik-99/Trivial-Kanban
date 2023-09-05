import { CreateBoardInput } from './create-board.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  @Field(() => String)
  id: string;
}
