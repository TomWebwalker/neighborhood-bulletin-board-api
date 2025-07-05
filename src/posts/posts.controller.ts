import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        title: { type: 'string', example: 'Community Garage Sale' },
        content: {
          type: 'string',
          example: 'Join us for a community garage sale this Saturday!',
        },
        category: { type: 'string', example: 'EVENT' },
        authorId: { type: 'number', example: 1 },
        imageUrl: { type: 'string', example: 'https://example.com/image.jpg' },
        location: { type: 'string', example: '123 Main Street' },
        expiresAt: { type: 'string', example: '2024-12-31T23:59:59.000Z' },
        createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        updatedAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - validation error',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  create(
    @Body() createPostDto: CreatePostDto,
    @CurrentUser() user: { userId: number; email: string; role: string },
  ) {
    return this.postsService.create(createPostDto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: 200,
    description: 'Posts retrieved successfully',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', example: 1 },
          title: { type: 'string', example: 'Community Garage Sale' },
          content: {
            type: 'string',
            example: 'Join us for a community garage sale this Saturday!',
          },
          category: { type: 'string', example: 'EVENT' },
          authorId: { type: 'number', example: 1 },
          imageUrl: {
            type: 'string',
            example: 'https://example.com/image.jpg',
          },
          location: { type: 'string', example: '123 Main Street' },
          expiresAt: { type: 'string', example: '2024-12-31T23:59:59.000Z' },
          createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
          updatedAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        },
      },
    },
  })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiParam({ name: 'id', description: 'Post ID', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Post retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        title: { type: 'string', example: 'Community Garage Sale' },
        content: {
          type: 'string',
          example: 'Join us for a community garage sale this Saturday!',
        },
        category: { type: 'string', example: 'EVENT' },
        authorId: { type: 'number', example: 1 },
        imageUrl: { type: 'string', example: 'https://example.com/image.jpg' },
        location: { type: 'string', example: '123 Main Street' },
        expiresAt: { type: 'string', example: '2024-12-31T23:59:59.000Z' },
        createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        updatedAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Post not found',
  })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a post' })
  @ApiParam({ name: 'id', description: 'Post ID', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Post updated successfully',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'number', example: 1 },
        title: { type: 'string', example: 'Community Garage Sale' },
        content: {
          type: 'string',
          example: 'Join us for a community garage sale this Saturday!',
        },
        category: { type: 'string', example: 'EVENT' },
        authorId: { type: 'number', example: 1 },
        imageUrl: { type: 'string', example: 'https://example.com/image.jpg' },
        location: { type: 'string', example: '123 Main Street' },
        expiresAt: { type: 'string', example: '2024-12-31T23:59:59.000Z' },
        createdAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
        updatedAt: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - validation error',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user can only update their own posts',
  })
  @ApiResponse({
    status: 404,
    description: 'Post not found',
  })
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @CurrentUser() user: { userId: number; email: string; role: string },
  ) {
    return this.postsService.update(+id, updatePostDto, user.userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a post' })
  @ApiParam({ name: 'id', description: 'Post ID', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Post deleted successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - user can only delete their own posts',
  })
  @ApiResponse({
    status: 404,
    description: 'Post not found',
  })
  remove(
    @Param('id') id: string,
    @CurrentUser() user: { userId: number; email: string; role: string },
  ) {
    return this.postsService.remove(+id, user.userId);
  }
}
