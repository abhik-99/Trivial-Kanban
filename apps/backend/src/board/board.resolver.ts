import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { GraphQLUser } from 'src/decorators';
import { UserJwt } from 'src/auth/dto/user-jwt.dto';
import { BoardUserService } from 'src/board-user/board-user.service';
import { BoardUser } from 'src/board-user/entities/board-user.entity';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService, private readonly boardUserService: BoardUserService) {}

  @Mutation(() => Board)
  createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
    @GraphQLUser() user: UserJwt,
  ) {
    return this.boardService.create(createBoardInput, user.sub);
  }

  @Query(() => [Board], { name: 'boards' })
  findAll(@GraphQLUser() user: UserJwt) {
    return this.boardService.findAll(user.sub);
  }

  @Query(() => Board, { name: 'board' })
  findOne(@Args('id', { type: () => String }) id: string, @GraphQLUser() user: UserJwt) {
    return this.boardService.findOne(id, user.sub);
  }

  @Mutation(() => Board)
  updateBoard(@Args('updateBoardInput') updateBoardInput: UpdateBoardInput, @GraphQLUser() user: UserJwt) {
    return this.boardService.update(updateBoardInput.id, updateBoardInput, user.sub);
  }

  @Mutation(() => Board)
  removeBoard(@Args('id', { type: () => String }) id: string, @GraphQLUser() user: UserJwt) {
    return this.boardService.remove(id, user.sub);
  }

  @ResolveField('boardUsers', returns => [BoardUser])
  async boardUsersResolver(@Parent() board) {
    const { id } = board;
    return this.boardUserService.findAll(undefined,id);
  }
}
