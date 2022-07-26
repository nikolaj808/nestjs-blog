import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  create(createCommentInput: CreateCommentInput) {
    return this.prisma.comment.create({
      data: {
        ...createCommentInput,
      },
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findAllByUser(userId: number) {
    return this.prisma.comment.findMany({
      where: {
        commentor: {
          id: userId,
        },
      },
    });
  }

  findAllByPost(postId: number) {
    return this.prisma.comment.findMany({
      where: {
        post: {
          id: postId,
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateCommentInput: UpdateCommentInput) {
    return this.prisma.comment.update({
      where: {
        id: updateCommentInput.id,
      },
      data: {
        ...updateCommentInput,
      },
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({
      where: {
        id,
      },
    });
  }
}
