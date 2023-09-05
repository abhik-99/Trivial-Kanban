import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  
  @Field(() => String)
  boardName:string

  @Field(() => String)
  boardDescription:string
}
