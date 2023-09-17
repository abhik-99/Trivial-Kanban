import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsUUID,
  MaxLength
} from 'class-validator';

@InputType()
export class UpdateCommentInput{
  @IsNotEmpty()
  @IsUUID()
  @Field(() => String)
  id: string;

  @IsNotEmpty()
  @MaxLength(180)
  @Field(()=> String)
  body: string
}
