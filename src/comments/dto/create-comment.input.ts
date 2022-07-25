import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field({ description: 'The comments content' })
  content: string;

  @Field(() => Int, { description: 'The comment authors ID (unique)' })
  commentorId: number;

  @Field(() => Int, {
    description: 'The post ID that was commented on (unique)',
  })
  postId: number;
}
