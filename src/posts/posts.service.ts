import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePostDto): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
