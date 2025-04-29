
# 🏘️ Neighborhood Bulletin Board – Backend API

This is the **backend service** for the [Neighborhood Bulletin Board](https://github.com/tomwebwalker/neighborhood-bulletin-board) project, built with **NestJS**. It provides the RESTful API for managing posts, users, authentication, and more.

---

## 📦 Tech Stack

| Layer       | Tech             |
|-------------|------------------|
| Framework   | NestJS (Node.js) |
| Database    | MongoDB or PostgreSQL (via TypeORM or Prisma) |
| Auth        | JWT (Passport.js) |
| Validation  | class-validator  |
| File Upload | Multer (optional: Cloudinary or S3) |

---

## 📂 Folder Structure

```
src/
├── auth/             # JWT auth logic
├── posts/            # CRUD operations for posts
├── users/            # User management
├── common/           # Guards, decorators, interceptors
├── config/           # Environment config
├── main.ts           # Entry point
```

---

## 🔧 Setup Instructions

### 1. Prerequisites
- Node.js v18+
- Nest CLI (`npm i -g @nestjs/cli`)
- MongoDB or PostgreSQL instance

### 2. Installation

```bash
# Clone the repo
git clone https://github.com/<your-org>/neighborhood-bulletin-board-backend.git
cd neighborhood-bulletin-board-backend

# Install dependencies
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root:

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/bulletin
JWT_SECRET=your-secret-key
```

### 4. Run the App

```bash
# Development mode
npm run start:dev
```

API will be available at: `http://localhost:3000`

---

## 📬 API Endpoints (Example)

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | /auth/register     | Register new user    |
| POST   | /auth/login        | Login + JWT token    |
| GET    | /posts             | Get all posts        |
| POST   | /posts             | Create a post        |
| PUT    | /posts/:id         | Edit a post          |
| DELETE | /posts/:id         | Delete a post        |

Full Swagger docs coming soon!

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e
```

---

## 🛠️ Contribution

This is part of the full-stack [Neighborhood Bulletin Board](https://github.com/<your-org>/neighborhood-bulletin-board) project.

- Open issues or PRs are welcome!
- Follow our [contribution guidelines](../CONTRIBUTING.md)

---

## 📑 License

MIT © tomwebwalker.pl

---

## 🔗 Related Repos

- [Frontend (Angular)](https://github.com/tomwebwalker/neighborhood-bulletin-board)
