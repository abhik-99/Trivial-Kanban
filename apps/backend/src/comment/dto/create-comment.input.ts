import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsUUID,
  MaxLength
} from 'class-validator';

@InputType()
export class CreateCommentInput {

  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  cardId: string;

  @IsNotEmpty()
  @MaxLength(180)
  @Field(()=> String)
  body: string
}
