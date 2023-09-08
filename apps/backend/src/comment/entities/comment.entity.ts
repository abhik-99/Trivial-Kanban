import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
