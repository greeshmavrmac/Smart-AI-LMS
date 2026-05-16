const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB =
  require("./config/db");

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

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

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

app.get("/", (req, res) => {
  res.send(
    "Backend Running Successfully"
  );
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});