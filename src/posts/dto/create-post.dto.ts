import { IsNotEmpty } from 'class-validator';

type PostCategory = 'ANNOUNCEMENT' | 'EVENT' | 'LOST_FOUND' | 'HELP';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  category: PostCategory;

  authorId: number;
  imageUrl: string;
  location: string;
  expiresAt: string;
}
