import { Field, InputType, OmitType } from '@nestjs/graphql';
import { CreateColumnInput } from './create-column.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class UpdateColumnInput extends PartialType(
  OmitType(CreateColumnInput, ['boardId']),
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
