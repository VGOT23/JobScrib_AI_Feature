# Job Scribe 🖋️

Job Scribe is an AI-powered full-stack web application designed to assist users in crafting professional resumes, cover letters, and job application materials. Leverage modern web technologies to streamline the job application process.

## ✨ Features (Planned & Current)
### Current:
- Backend API server with Express.js and MongoDB integration (basic setup).
- Environment configuration with dotenv.

### Planned:
- User authentication and profile management.
- AI-generated resume/cover letter builder.
- Job matching and recommendations.
- Frontend dashboard with React/Vue for interactive editing.
- PDF export for resumes.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js, MongoDB (Mongoose ODM)
- **Frontend**: (TBD - React recommended)
- **Database**: MongoDB
- **Other**: dotenv for env vars

## 📁 Project Structure
```
Job Scribe/
├── Readme.md          # This file
├── .gitignore
├── TODO.md            # Progress tracker
├── backend/           # API server
│   ├── package.json
│   ├── server.js      # Entry point (port 3000)
│   └── src/
│       ├── app.js
│       ├── db/db.js   # DB connection
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── services/
└── frontend/          # Client app (empty - to be built)
```

## 🚀 Quick Start
### Backend
1. Navigate to backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create `.env` file with MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```
   node server.js
   ```
   Server runs on `http://localhost:3000`.

### Frontend
Frontend directory is empty. Initialize with:
```
cd frontend
npx create-react-app .  # or similar
npm start
```

## 🔮 Roadmap
- [ ] Complete backend models/routes (User, Resume, Job).
- [ ] Integrate AI service (e.g., OpenAI API).
- [ ] Build frontend UI.
- [ ] Add tests (Jest/Mocha).
- [ ] Deploy (Vercel/Heroku + MongoDB Atlas).

## 🤝 Contributing
1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Submit PR.

## 📄 License
This project is licensed under the ISC License - see [LICENSE](LICENSE) (to be added).

---

⭐ Star the repo if helpful!

