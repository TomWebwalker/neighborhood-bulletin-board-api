import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

type PostCategory = 'ANNOUNCEMENT' | 'EVENT' | 'LOST_FOUND' | 'HELP';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: PostCategory;

  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  expiresAt: string;
}
