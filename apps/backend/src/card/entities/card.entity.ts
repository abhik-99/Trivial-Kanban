import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Card {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleField2: string;
}
