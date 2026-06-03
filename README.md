# 🤖 Smart AI LMS – AI Powered Learning Management System

An educational platform that integrates course management, AI-assisted learning, and intelligent quiz generation. Built with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Key Features

- **📚 Course Management** - YouTube video integration and organized learning resources
- **🤖 AI Learning Assistant** - Real-time Q&A and personalized guidance
- **📝 Smart Quiz Generation** - Dynamic AI-powered quizzes with difficulty levels
- **🔐 Secure Authentication** - JWT-based user authentication & role-based access
- **📱 Responsive Design** - Mobile-friendly interface

---

## 📂 Project Architecture

```
Smart-AI-LMS/
├── frontend/          # React + Vite
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
├── backend/           # Node + Express
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Deployment |
|----------|---------|----------|-----------|
| React.js | Node.js | MongoDB | Vercel / Render |
| Vite | Express.js | - | - |
| Axios | JWT + Bcrypt | - | - |

---

## 📱 Core Modules

1. **Home Page** - Platform overview
2. **Student Dashboard** - Progress tracking & course access
3. **AI Assistant** - Real-time chat support
4. **Quiz Module** - Timed quizzes with instant results
5. **Authentication** - Secure login & registration

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB

### Quick Start

```bash
# Clone & setup
git clone https://github.com/greeshmavrmac/Smart-AI-LMS.git
cd Smart-AI-LMS

# Frontend setup
cd frontend
npm install
npm run dev

# Backend setup (new terminal)
cd backend
npm install
npm start
```

### Environment Variables (Backend)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
AI_API_KEY=your_api_key
```

---

## 📊 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/courses` | GET | Fetch all courses |
| `/api/quizzes/generate` | POST | Generate AI quiz |
| `/api/ai/chat` | POST | AI chat |

---

## 🔮 Future Enhancements

- Learning analytics dashboard
- Digital certificates
- Gamification (points, badges, leaderboards)
- Voice-based learning
- Multi-language support

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see LICENSE file for details

---

⭐ **If you found this helpful, please star the repository!** ⭐
