import { InputType, Int, Field, OmitType } from '@nestjs/graphql';
import { Board } from '../entities/board.entity';

@InputType()
export class CreateBoardInput extends OmitType(Board, [
  'id',
  'createdAt',
  'createdBy',
  'updatedAt',
]) {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
