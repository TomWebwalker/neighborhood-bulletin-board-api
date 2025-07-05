# 🏘️ Neighborhood Bulletin Board – Backend API

[![CI](https://github.com/tomwebwalker/neighborhood-bulletin-board-api/actions/workflows/ci.yml/badge.svg)](https://github.com/tomwebwalker/neighborhood-bulletin-board-api/actions/workflows/ci.yml)

This is the **backend service** for the [Neighborhood Bulletin Board](https://github.com/tomwebwalker/neighborhood-bulletin-board) project, built with **NestJS**. It provides the RESTful API for managing posts, users, authentication, and more.

---

## 📦 Tech Stack

| Layer       | Tech             |
|-------------|------------------|
| Framework   | NestJS (Node.js) |
| Database    | SQLite (Prisma)  |
| Auth        | JWT (Passport.js) |
| Validation  | class-validator  |
| Testing     | Jest             |
| Linting     | ESLint + Prettier |
| Documentation| Swagger/OpenAPI  |

---

## 🚀 CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment:

### Automated Checks on Every PR:
- ✅ **Linting**: ESLint checks for code quality
- ✅ **Formatting**: Prettier ensures consistent code style
- ✅ **Type Checking**: TypeScript compilation validation
- ✅ **Unit Tests**: Jest test suite with coverage
- ✅ **E2E Tests**: End-to-end integration tests
- ✅ **Build**: Application compilation verification
- ✅ **Security**: Dependency vulnerability scanning

### Workflows:
- **CI Pipeline** (`.github/workflows/ci.yml`): Runs on PRs and pushes to main/develop
- **Dependency Review** (`.github/workflows/dependency-review.yml`): Security checks for dependencies
- **Dependabot** (`.github/dependabot.yml`): Automated dependency updates

### Local Development:
```bash
# Run all CI checks locally
npm run ci

# Individual checks
npm run lint:check      # ESLint validation
npm run format:check    # Prettier validation
npm run type-check      # TypeScript validation
npm run test:cov        # Tests with coverage
npm run build           # Build verification
```

---

## 📂 Folder Structure

```
src/
├── posts/            # CRUD operations for posts
├── users/            # User management
├── dto/              # Data Transfer Objects
├── main.ts           # Entry point
├── app.module.ts     # Root module
└── prisma.service.ts # Database service
```

---

## 🔧 Setup Instructions

### 1. Prerequisites
- Node.js v18+
- Nest CLI (`npm i -g @nestjs/cli`)

### 2. Installation

```bash
# Clone the repo
git clone https://github.com/<your-org>/neighborhood-bulletin-board-api.git
cd neighborhood-bulletin-board-api

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

### 5. Run the App

```bash
# Development mode
npm run start:dev
```

API will be available at: `http://localhost:3000`

---

## 📬 API Endpoints

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | /posts             | Get all posts        |
| POST   | /posts             | Create a post        |
| PUT    | /posts/:id         | Edit a post          |
| DELETE | /posts/:id         | Delete a post        |
| GET    | /users             | Get all users        |
| POST   | /users             | Create a user        |
| PUT    | /users/:id         | Edit a user          |
| DELETE | /users/:id         | Delete a user        |

---

## 📚 API Documentation (Swagger)

The API is fully documented using **Swagger/OpenAPI 3.0**. You can access the interactive documentation in several ways:

### 🌐 Swagger UI
Visit the interactive API documentation at: **http://localhost:3000/api**

Features:
- ✅ **Interactive Testing**: Try out API endpoints directly from the browser
- ✅ **Request/Response Examples**: See example data for all endpoints
- ✅ **Authentication**: JWT Bearer token support for protected endpoints
- ✅ **Schema Validation**: Automatic validation of request/response schemas
- ✅ **Download OpenAPI Spec**: Export the API specification as JSON/YAML

### 📄 OpenAPI Specification
- **JSON Format**: http://localhost:3000/api-json
- **YAML Format**: http://localhost:3000/api-yaml

### 🔐 Authentication
Protected endpoints require a JWT Bearer token. To authenticate:

1. **Register** or **Login** using the `/auth/register` or `/auth/login` endpoints
2. **Copy the `accessToken`** from the response
3. **Click the "Authorize" button** in Swagger UI
4. **Enter**: `Bearer YOUR_TOKEN_HERE`
5. **Now you can access protected endpoints**

### 📋 Available Endpoints

#### Authentication (`/auth`)
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get current user profile (protected)

#### Posts (`/posts`)
- `GET /posts` - Get all posts
- `POST /posts` - Create a new post (protected)
- `GET /posts/{id}` - Get a specific post
- `PATCH /posts/{id}` - Update a post (protected)
- `DELETE /posts/{id}` - Delete a post (protected)

#### Users (`/users`)
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/{id}` - Get a specific user
- `PATCH /users/{id}` - Update a user
- `DELETE /users/{id}` - Delete a user

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e

# Run tests in watch mode
npm run test:watch
```

---

## 🛠️ Development Workflow

1. **Create a feature branch** from `main` or `develop`
2. **Make your changes** following the coding standards
3. **Run local checks** before committing:
   ```bash
   npm run ci
   ```
4. **Commit your changes** with conventional commit messages
5. **Push and create a PR** - GitHub Actions will automatically run all checks
6. **Address any CI failures** before merging
7. **Merge when all checks pass** ✅

### Code Quality Standards:
- Follow TypeScript best practices
- Write unit tests for new features
- Ensure all linting and formatting checks pass
- Maintain test coverage above 80%

---

## 📑 License

MIT © tomwebwalker.pl

---

## 🔗 Related Repos

- [Frontend (Angular)](https://github.com/tomwebwalker/neighborhood-bulletin-board)
