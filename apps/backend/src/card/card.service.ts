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

  findOne(id: string) {
    return `This action returns a #${id} card`;
  }

  update(id: string, updateCardInput: UpdateCardInput) {
    return `This action updates a #${id} card`;
  }

  remove(id: string) {
    return `This action removes a #${id} card`;
  }
}
