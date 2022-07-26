import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentsModule } from 'src/comments/comments.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [
    PrismaModule,
    forwardRef(() => CommentsModule),
    forwardRef(() => UsersModule),
  ],
  exports: [PostsService],
})
export class PostsModule {}
