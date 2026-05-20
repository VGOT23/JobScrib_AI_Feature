# Job Scribe 🖋️

Job Scribe is an AI-powered full-stack web application designed to help users craft professional resumes, cover letters, and job application materials. 

## ✨ Features

### Current
- Backend API server with Express.js + MongoDB integration
- User authentication (JWT) using HTTP-only cookies
- MongoDB models:
  - **User** — username, email, hashed password
  - **Resume** — file metadata, parsed text, extracted skills, versioning, links to user + job application
  - **JobApplication** — company, role, status tracking, required skills, notes, links to resume
- Environment configuration via `dotenv`

### Planned
- AI-generated resume / cover letter builder
- Job matching and recommendations
- Frontend dashboard for interactive editing (React recommended)
- PDF export for resumes
- Cloud file storage integration (S3 / Cloudinary)

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: bcryptjs, JSON Web Tokens (JWT), cookie-parser
- **Frontend**: TBD (React recommended)
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

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in `backend/`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_super_secret_jwt_key
   ```

3. Start the server:
   ```bash
   node server.js
   ```

API base URL:
- `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user (JWT stored in cookie) |
| POST | `/api/auth/login` | Login an existing user (JWT stored in cookie) |

Request body for both endpoints:
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

## 🧑‍💻 Frontend

The `frontend/` directory is currently empty. Initialize it with your preferred framework, for example:

```bash
cd frontend
npx create-react-app .   # or Vite, Next.js, Vue, etc.
npm start
```

## 🔮 Roadmap

- [x] Set up Express server with MongoDB connection
- [x] Create backend data models (User, Resume, JobApplication)
- [x] Implement user authentication (register / login with JWT & cookies)
- [ ] Add CRUD routes for Resume & JobApplication
- [ ] Integrate AI service (e.g., OpenAI API) for content generation
- [ ] Build frontend UI
- [ ] Add tests (Jest / Mocha)
- [ ] Deploy (Vercel / Render / Heroku + MongoDB Atlas)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "Add amazing feature"`
4. Push branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

⭐ Star the repo if you find it helpful!

