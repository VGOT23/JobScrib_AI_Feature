# Job Scribe 🖋️

Job Scribe is an AI-powered full-stack web application designed to assist users in crafting professional resumes, cover letters, and job application materials. It leverages modern web technologies to streamline the job application process.

## ✨ Features

### Current:
- **Backend API server** with Express.js and MongoDB integration.
- **User Authentication** — JWT-based registration and login with HTTP-only cookies.
- **MongoDB Models**:
  - `User` — username, email, password (hashed with bcryptjs).
  - `Resume` — file metadata, parsed text, skills extraction, versioning, linked to user & job application.
  - `JobApplication` — company, role, status tracking, skills required, notes, resume linkage.
- **Environment configuration** with dotenv.

### Planned:
- AI-generated resume / cover letter builder.
- Job matching and recommendations.
- Frontend dashboard with React/Vue for interactive editing.
- PDF export for resumes.
- Cloud file storage integration (S3 / Cloudinary).

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (Mongoose ODM)
- **Authentication**: bcryptjs, JSON Web Tokens (JWT), cookie-parser
- **Frontend**: (TBD — React recommended)
- **Database**: MongoDB
- **Other**: dotenv for environment variables

## 📁 Project Structure

```
Job Scribe/
├── Readme.md                    # This file
├── .gitignore
├── package.json                 # Root dependencies
├── TODO.md                      # Progress tracker
├── backend/                     # API server
│   ├── package.json
│   ├── server.js                # Entry point (port 3000)
│   └── src/
│       ├── app.js               # Express app setup & middleware
│       ├── db/
│       │   └── db.js            # MongoDB connection logic
│       ├── controllers/
│       │   └── auth.controller.js   # Register / Login handlers
│       ├── models/
│       │   ├── user.model.js        # User schema
│       │   ├── resume.model.js      # Resume schema
│       │   └── jobapplication.model.js  # Job application schema
│       ├── routes/
│       │   └── auth.routes.js       # Auth API routes
│       ├── middlewares/         # (empty — for future auth guards, error handlers)
│       └── services/            # (empty — for future AI / file services)
└── frontend/                    # Client app (empty — to be built)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` folder with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_super_secret_jwt_key
   ```

4. Start the server:
   ```bash
   node server.js
   ```
   The API will be available at `http://localhost:3000`.

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user (returns JWT in cookie) |
| POST | `/api/auth/login` | Login an existing user (returns JWT in cookie) |

Request body for both endpoints:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Frontend

The `frontend/` directory is currently empty. Initialize it with your preferred framework, for example:

```bash
cd frontend
npx create-react-app .   # or Vite, Next.js, Vue, etc.
npm start
```

## 🔮 Roadmap

- [x] Set up Express server with MongoDB connection.
- [x] Create backend data models (User, Resume, JobApplication).
- [x] Implement user authentication (register / login with JWT & cookies).
- [ ] Add CRUD routes for Resume & JobApplication.
- [ ] Integrate AI service (e.g., OpenAI API) for content generation.
- [ ] Build frontend UI.
- [ ] Add tests (Jest / Mocha).
- [ ] Deploy (Vercel / Render / Heroku + MongoDB Atlas).

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the ISC License.

---

⭐ Star the repo if you find it helpful!

