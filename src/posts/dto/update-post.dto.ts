import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePostDto, PostCategory } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'Post title (optional)',
    example: 'Community Garage Sale',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'Post content (optional)',
    example: 'Join us for a community garage sale this Saturday!',
    required: false,
  })
  content?: string;

  @ApiProperty({
    description: 'Post category (optional)',
    enum: PostCategory,
    example: PostCategory.EVENT,
    required: false,
  })
  category?: PostCategory;

  @ApiProperty({
    description: 'Image URL for the post (optional)',
    example: 'https://example.com/image.jpg',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'Post location (optional)',
    example: '123 Main Street',
    required: false,
  })
  location?: string;

  @ApiProperty({
    description: 'Post expiration date (ISO string) (optional)',
    example: '2024-12-31T23:59:59.000Z',
    required: false,
  })
  expiresAt?: string;
}
