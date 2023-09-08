import { InputType } from '@nestjs/graphql';
import { AddBoardUserInput } from './add-board-user.input';

@InputType()
export class RemoveBoardUserInput extends AddBoardUserInput {
}
