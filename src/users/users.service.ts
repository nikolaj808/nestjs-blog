import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...createUserInput,
      },
      include: {
        comments: true,
        posts: true,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        comments: true,
        posts: true,
      },
    });
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        comments: true,
        posts: true,
      },
    });
  }

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: updateUserInput.id,
      },
      data: {
        ...updateUserInput,
      },
      include: {
        comments: true,
        posts: true,
      },
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
      include: {
        comments: true,
        posts: true,
      },
    });
  }
}
