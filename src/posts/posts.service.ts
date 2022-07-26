import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: {
        ...createPostInput,
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findAllByUser(userId: number) {
    return this.prisma.post.findMany({
      where: {
        author: {
          id: userId,
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({
      where: {
        id,
      },
    });
  }

  update(updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: {
        id: updatePostInput.id,
      },
      data: {
        ...updatePostInput,
      },
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
