import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommentsModule } from 'src/comments/comments.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    PrismaModule,
    forwardRef(() => CommentsModule),
    forwardRef(() => PostsModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
