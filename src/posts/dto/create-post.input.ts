import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field({ description: 'The posts title' })
  title: string;

  @Field(() => Int, { description: 'The post authors ID (unique)' })
  authorId: number;
}
