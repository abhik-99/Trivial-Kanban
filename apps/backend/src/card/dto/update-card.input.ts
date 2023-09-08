import { CreateCardInput } from './create-card.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateCardInput extends PartialType(CreateCardInput) {

  @IsUUID()
  @Field(() => String)
  id: string;
}
