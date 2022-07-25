import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';

@ObjectType()
export class Post {
  @Field(() => Int, { description: 'The posts ID (unique)' })
  id: number;

  @Field(() => GraphQLISODateTime, { description: 'The posts creation date' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'The posts last update date',
  })
  updatedAt: Date;

  @Field({ description: 'The posts title' })
  title: string;

  @Field({ description: 'The posts content', nullable: true })
  content?: string;

  @Field({ description: 'The posts published status' })
  published: boolean;

  @Field({ description: 'The posts view count' })
  viewCount: number;

  @Field(() => User, {
    description: 'The posts author',
    nullable: true,
  })
  author?: User;

  @Field(() => Int, { description: 'The post authors ID (unique)' })
  authorId: number;

  @Field(() => [Comment], {
    description: 'The posts comments',
    nullable: true,
  })
  comments?: Comment[];
}
