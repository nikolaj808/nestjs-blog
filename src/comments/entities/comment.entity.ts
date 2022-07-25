import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Comment {
  @Field(() => Int, { description: 'The comments ID (unique)' })
  id: number;

  @Field(() => GraphQLISODateTime, {
    description: 'The comments creation date',
  })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'The comments last update date',
  })
  updatedAt: Date;

  @Field({ description: 'The comments content' })
  content: string;

  @Field(() => User, {
    description: 'The comments author',
    nullable: true,
  })
  commentor?: User;

  @Field(() => Int, { description: 'The comment authors ID (unique)' })
  commentorId: number;

  @Field(() => Post, {
    description: 'The post that has been commented on',
    nullable: true,
  })
  post?: Post;

  @Field(() => Int, {
    description: 'The post ID that was commented on (unique)',
  })
  postId: number;
}
