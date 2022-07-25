import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentInput: CreateCommentInput): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        ...createCommentInput,
      },
      include: {
        commentor: true,
        post: true,
      },
    });
  }

  async findAll(): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      include: {
        commentor: true,
        post: true,
      },
    });
  }

  async findOne(id: number): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: {
        id,
      },
      include: {
        commentor: true,
        post: true,
      },
    });
  }

  async update(updateCommentInput: UpdateCommentInput): Promise<Comment> {
    return this.prisma.comment.update({
      where: {
        id: updateCommentInput.id,
      },
      data: {
        ...updateCommentInput,
      },
      include: {
        commentor: true,
        post: true,
      },
    });
  }

  async remove(id: number): Promise<Comment> {
    return this.prisma.comment.delete({
      where: {
        id,
      },
      include: {
        commentor: true,
        post: true,
      },
    });
  }
}
