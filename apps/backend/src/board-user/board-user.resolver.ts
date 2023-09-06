import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { BoardUserService } from './board-user.service';
import { AddBoardUserInput } from './dto/add-board-user.input';
import { RemoveBoardUserInput } from './dto/remove-board-user.input';
import { BoardService } from 'src/board/board.service';

@Resolver('BoardUser')
export class BoardUserResolver {
  constructor(private readonly boardUserService: BoardUserService, private readonly boardService: BoardService) {}

  @Mutation('addBoardUser')
  create(@Args('addBoardUserInput') addBoardUserInput: AddBoardUserInput) {
    return this.boardUserService.create(addBoardUserInput);
  }

  @Query('boardUsers')
  findAll() {
    return this.boardUserService.findAll();
  }

  @Mutation('removeBoardUser')
  remove(@Args('removeBoardUser') removeBoardUserInput: RemoveBoardUserInput) {
    return this.boardUserService.remove(removeBoardUserInput);
  }

  @ResolveField()
  async board(@Parent() board) {
    const { boardId } = board;
    return this.boardService.findOne(boardId);
  }
}
