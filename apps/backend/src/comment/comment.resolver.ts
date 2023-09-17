import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { GraphQLUser } from 'src/decorators';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @GraphQLUser('sub') userId: string,
  ) {
    return this.commentService.create(createCommentInput, userId);
  }

  @Query(() => [Comment], { name: 'comment' })
  findAll() {
    return this.commentService.findAll({});
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.commentService.findOne(id);
  }

  @Mutation(() => Comment)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
    @GraphQLUser('sub') userId: string,
  ) {
    return this.commentService.update(
      updateCommentInput.id,
      updateCommentInput,
      userId
    );
  }

  @Mutation(() => Comment)
  removeComment(
    @Args('id', { type: () => String }) id: string,
    @GraphQLUser('sub') userId: string,
  ) {
    return this.commentService.remove(id, userId);
  }
}
