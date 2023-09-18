import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { BoardModule } from 'src/board/board.module';

@Module({
  imports: [forwardRef(() => BoardModule)],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
