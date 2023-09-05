import { Injectable } from '@nestjs/common';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';

@Injectable()
export class CardService {
  create(createCardInput: CreateCardInput) {
    return 'This action adds a new card';
  }

  findAll() {
    return [{exampleField2:`This action returns all card`}];
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardInput: UpdateCardInput) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
