import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateBoardInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  boardName:string

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  boardDescription:string
}
