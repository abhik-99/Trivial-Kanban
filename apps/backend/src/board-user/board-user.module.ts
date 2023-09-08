import { Module, forwardRef } from '@nestjs/common';
import { BoardUserService } from './board-user.service';
import { BoardUserResolver } from './board-user.resolver';
import { BoardModule } from 'src/board/board.module';

@Module({
  imports: [forwardRef(() => BoardModule)],
  providers: [BoardUserResolver, BoardUserService],
  exports: [BoardUserService]
})
export class BoardUserModule {}
