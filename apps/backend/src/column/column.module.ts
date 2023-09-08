import { Module, forwardRef } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnResolver } from './column.resolver';
import { BoardUserModule } from 'src/board-user/board-user.module';
import { BoardModule } from 'src/board/board.module';
import { CardModule } from 'src/card/card.module';

@Module({
  imports: [
    BoardUserModule,
    forwardRef(() => BoardModule),
    forwardRef(() => CardModule),
  ],
  providers: [ColumnResolver, ColumnService],
  exports: [ColumnService],
})
export class ColumnModule {}
