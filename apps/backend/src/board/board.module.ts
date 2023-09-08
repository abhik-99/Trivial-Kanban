import { Module, forwardRef } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';
import { BoardUserModule } from 'src/board-user/board-user.module';

@Module({
  imports: [forwardRef(() =>BoardUserModule)],
  providers: [BoardResolver, BoardService],
  exports: [BoardService]
})
export class BoardModule {}
