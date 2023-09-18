import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { GraphQLUser } from 'src/decorators';
import { Board } from 'src/board/entities/board.entity';
import { BoardService } from 'src/board/board.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly boardService: BoardService,
  ) {}

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll({});
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  removeUser(@GraphQLUser('sub') id: string) {
    return this.userService.remove(id);
  }

  @ResolveField('boardsCreated', (returns) => [Board])
  getBoardsCreatedByUser(@Parent() user: User) {
    const { id } = user;
    return this.boardService.findAll({createdBy: id});
  }
}
