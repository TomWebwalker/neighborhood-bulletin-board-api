# Authentication Features

This API now includes comprehensive authentication features for user registration and login.

## Features

- **User Registration**: Create new user accounts with email and password
- **User Login**: Authenticate users and receive JWT tokens
- **JWT Authentication**: Secure API endpoints with JWT-based authentication
- **Password Hashing**: Passwords are securely hashed using bcrypt
- **Protected Routes**: Certain endpoints require authentication
- **User Authorization**: Users can only modify their own posts

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login with email and password
- `GET /auth/profile` - Get current user profile (protected)

### Posts (with authentication)

- `GET /posts` - Get all posts (public)
- `GET /posts/:id` - Get a specific post (public)
- `POST /posts` - Create a new post (requires authentication)
- `PATCH /posts/:id` - Update a post (requires authentication, owner only)
- `DELETE /posts/:id` - Delete a post (requires authentication, owner only)

## Usage

### Registration

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Using Protected Endpoints

```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "My Post",
    "content": "Post content",
    "category": "ANNOUNCEMENT",
    "imageUrl": "https://example.com/image.jpg",
    "location": "123 Main St",
    "expiresAt": "2024-12-31T23:59:59Z"
  }'
```

## Environment Variables

Add the following to your `.env` file:

```
JWT_SECRET=your-secret-key-here
```

## Security Features

- Passwords are hashed using bcrypt with salt rounds of 10
- JWT tokens expire after 24 hours
- Users can only modify their own posts
- Email addresses must be unique
- Password minimum length is 6 characters
- All inputs are validated using class-validator

## Testing

Run the authentication tests:

```bash
npm run test src/auth/auth.service.spec.ts
``` 