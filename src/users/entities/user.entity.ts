import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Comment } from 'src/comments/entities/comment.entity';
import { Post } from 'src/posts/entities/post.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'The users ID (unique)' })
  id: number;

  @Field(() => GraphQLISODateTime, { description: 'The users creation date' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'The users last update date',
  })
  updatedAt: Date;

  @Field({ description: 'The users email (unique)' })
  email: string;

  @Field({ description: 'The users name', nullable: true })
  name?: string;

  @Field(() => [Post], {
    description: 'Posts authored by the user',
  })
  posts: Post[];

  @Field(() => [Comment], {
    description: 'Comments authored by the user',
  })
  comments: Comment[];
}
