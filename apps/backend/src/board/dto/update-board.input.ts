import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateBoardInput } from './create-board.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  id: string;
}
