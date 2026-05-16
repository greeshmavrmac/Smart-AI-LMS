const express =
  require("express");

const {
  createLesson,
  getLessons,
} = require(
  "../controllers/lessonController"
);

const router =
  express.Router();

router.post(
  "/create",
  createLesson
);

router.get(
  "/:courseId",
  getLessons
);

module.exports =
  router;