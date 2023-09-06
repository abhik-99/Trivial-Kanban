import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardResolver } from './board.resolver';

@Module({
  providers: [BoardResolver, BoardService],
  exports: [BoardService]
})
export class BoardModule {}
