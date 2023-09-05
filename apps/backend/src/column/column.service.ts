import { Injectable } from '@nestjs/common';
import { CreateColumnInput } from './dto/create-column.input';
import { UpdateColumnInput } from './dto/update-column.input';

@Injectable()
export class ColumnService {
  create(createColumnInput: CreateColumnInput) {
    return 'This action adds a new column';
  }

  findAll() {
    return `This action returns all column`;
  }

  findOne(id: number) {
    return `This action returns a #${id} column`;
  }

  update(id: number, updateColumnInput: UpdateColumnInput) {
    return `This action updates a #${id} column`;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }
}
