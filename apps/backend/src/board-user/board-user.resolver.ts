import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BoardUserService } from './board-user.service';
import { AddBoardUserInput } from './dto/add-board-user.input';
import { RemoveBoardUserInput } from './dto/remove-board-user.input';
import { BoardService } from 'src/board/board.service';
import { BoardUser } from './entities/board-user.entity';
import { GraphQLUser } from 'src/decorators';
import { UserJwt } from 'src/auth/dto/user-jwt.dto';
import { UserService } from 'src/user/user.service';

@Resolver(() => BoardUser)
export class BoardUserResolver {
  constructor(
    private readonly boardUserService: BoardUserService,
    private readonly boardService: BoardService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => BoardUser, { name: 'addBoardUser' })
  create(
    @Args('addBoardUserInput') addBoardUserInput: AddBoardUserInput,
    @GraphQLUser() user: UserJwt,
  ) {
    return this.boardUserService.create(addBoardUserInput, user.sub);
  }

  @Query(() => [BoardUser], { name: 'boardUsers' })
  findAll() {
    return this.boardUserService.findAll();
  }

  @Mutation(() => BoardUser, { name: 'removeBoardUser' })
  remove(
    @Args('removeBoardUser') removeBoardUserInput: RemoveBoardUserInput,
    @GraphQLUser() user: UserJwt,
  ) {
    return this.boardUserService.remove(removeBoardUserInput, user.sub);
  }

  @ResolveField()
  async board(@Parent() boardUser) {
    const { boardId } = boardUser;
    console.log('Board User ID', boardUser);
    return this.boardService.findOne(boardId);
  }

  @ResolveField()
  async user(@Parent() boardUser) {
    const { userId } = boardUser;
    return this.userService.findOne(userId);
  }
}
