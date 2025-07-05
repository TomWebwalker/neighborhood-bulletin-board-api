import { IsNotEmpty, IsNumber, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum PostCategory {
  ANNOUNCEMENT = 'ANNOUNCEMENT',
  EVENT = 'EVENT',
  LOST_FOUND = 'LOST_FOUND',
  HELP = 'HELP',
}

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    example: 'Community Garage Sale',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Post content',
    example: 'Join us for a community garage sale this Saturday!',
  })
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'Post category',
    enum: PostCategory,
    example: PostCategory.EVENT,
  })
  @IsNotEmpty()
  @IsEnum(PostCategory)
  category: PostCategory;

  @ApiProperty({
    description: 'Author ID',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @ApiProperty({
    description: 'Image URL for the post',
    example: 'https://example.com/image.jpg',
  })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @ApiProperty({
    description: 'Post location',
    example: '123 Main Street',
  })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'Post expiration date (ISO string)',
    example: '2024-12-31T23:59:59.000Z',
  })
  @IsNotEmpty()
  @IsString()
  expiresAt: string;
}
