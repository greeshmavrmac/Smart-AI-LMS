const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

const dotenv =
  require("dotenv");

const path =
  require("path");

dotenv.config();

const authRoutes =
  require("./routes/authRoutes");

const courseRoutes =
  require("./routes/courseRoutes");

const lessonRoutes =
  require("./routes/lessonRoutes");

const enrollmentRoutes =
  require(
    "./routes/enrollmentRoutes"
  );

const progressRoutes =
  require(
    "./routes/progressRoutes"
  );

// AI ROUTES
const aiRoutes =
  require(
    "./routes/aiRoutes"
  );

const app =
  express();

// Middleware
app.use(cors());

app.use(
  express.json()
);

// VIDEO STATIC FOLDER
app.use(
  "/uploads",
  express.static(
    path.join(
      __dirname,
      "uploads"
    )
  )
);

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log(
      "✅ MongoDB Connected"
    );
  })
  .catch((err) => {
    console.log(
      err.message
    );
  });

// Routes
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/course",
  courseRoutes
);

app.use(
  "/api/lesson",
  lessonRoutes
);

app.use(
  "/api/enrollment",
  enrollmentRoutes
);

app.use(
  "/api/progress",
  progressRoutes
);

// AI API
app.use(
  "/api/ai",
  aiRoutes
);

// Test Route
app.get(
  "/",
  (req, res) => {
    res.send(
      "Backend Running..."
    );
  }
);

// Server
const PORT =
  process.env.PORT ||
  5000;

app.listen(
  PORT,
  () => {
    console.log(
      `🚀 Server running on port ${PORT}`
    );
  }
);