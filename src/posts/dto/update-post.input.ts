import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(
  OmitType(CreatePostInput, ['authorId']),
) {
  @Field(() => Int, { description: 'The posts ID (unique)' })
  id: number;

  @Field({ description: 'The posts content', nullable: true })
  content?: string;

  @Field({ description: 'The posts published status', nullable: true })
  published?: boolean;

  @Field({ description: 'The posts view count', nullable: true })
  viewCount?: number;
}
