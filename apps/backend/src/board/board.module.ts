import { Module, forwardRef } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { BoardUserModule } from 'src/board-user/board-user.module';
import { ColumnModule } from 'src/column/column.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    forwardRef(() => BoardUserModule),
    forwardRef(() => ColumnModule),
    forwardRef(() => UserModule),
  ],
  providers: [BoardResolver, BoardService],
  exports: [BoardService],
})
export class BoardModule {}
