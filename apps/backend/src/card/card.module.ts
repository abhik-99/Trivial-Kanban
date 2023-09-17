import { Module, forwardRef } from '@nestjs/common';
import { CardService } from './card.service';
import { CardResolver } from './card.resolver';
import { ColumnModule } from 'src/column/column.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [forwardRef(() => ColumnModule), forwardRef(() => CommentModule)],
  providers: [CardResolver, CardService],
  exports: [CardService]
})
export class CardModule {}
