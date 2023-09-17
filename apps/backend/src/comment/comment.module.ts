import { Module, forwardRef } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { CardModule } from 'src/card/card.module';
import { BoardUserModule } from 'src/board-user/board-user.module';

@Module({
  imports: [forwardRef(() => CardModule), BoardUserModule],
  providers: [CommentResolver, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
