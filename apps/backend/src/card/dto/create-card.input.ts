import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCardInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
