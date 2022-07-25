import { CreateCommentInput } from './create-comment.input';
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput extends PartialType(
  OmitType(CreateCommentInput, ['commentorId', 'postId']),
) {
  @Field(() => Int, { description: 'The comments ID (unique)' })
  id: number;
}
