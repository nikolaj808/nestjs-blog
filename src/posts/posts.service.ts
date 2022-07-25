import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({
      data: {
        ...createPostInput,
      },
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async update(updatePostInput: UpdatePostInput): Promise<Post> {
    return this.prisma.post.update({
      where: {
        id: updatePostInput.id,
      },
      data: {
        ...updatePostInput,
      },
      include: {
        author: true,
        comments: true,
      },
    });
  }

  async remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
      include: {
        author: true,
        comments: true,
      },
    });
  }
}
