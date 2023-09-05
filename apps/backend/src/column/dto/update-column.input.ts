import { CreateColumnInput } from './create-column.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateColumnInput extends PartialType(CreateColumnInput) {
  id: number;
}
