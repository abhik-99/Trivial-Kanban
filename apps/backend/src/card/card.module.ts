import { Module, forwardRef } from '@nestjs/common';
import { CardService } from './card.service';
import { CardResolver } from './card.resolver';
import { ColumnModule } from 'src/column/column.module';

@Module({
  imports: [forwardRef(() => ColumnModule)],
  providers: [CardResolver, CardService],
  exports: [CardService]
})
export class CardModule {}
