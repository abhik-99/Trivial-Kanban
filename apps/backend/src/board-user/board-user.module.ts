import { Module } from '@nestjs/common';
import { BoardUserService } from './board-user.service';
import { BoardUserResolver } from './board-user.resolver';
import { BoardModule } from 'src/board/board.module';

@Module({
  imports: [BoardModule],
  providers: [BoardUserResolver, BoardUserService],
})
export class BoardUserModule {}
