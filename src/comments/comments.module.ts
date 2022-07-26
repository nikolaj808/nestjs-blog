import { forwardRef, Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  providers: [CommentsResolver, CommentsService],
  imports: [
    PrismaModule,
    forwardRef(() => PostsModule),
    forwardRef(() => UsersModule),
  ],
  exports: [CommentsService],
})
export class CommentsModule {}
