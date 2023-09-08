import { Module, forwardRef } from '@nestjs/common';
import { ColumnService } from './column.service';
import { ColumnResolver } from './column.resolver';
import { BoardUserModule } from 'src/board-user/board-user.module';
import { BoardModule } from 'src/board/board.module';

@Module({
  imports: [BoardUserModule, forwardRef(() => BoardModule)],
  providers: [ColumnResolver, ColumnService],
  exports: [ColumnService]
})
export class ColumnModule {}
