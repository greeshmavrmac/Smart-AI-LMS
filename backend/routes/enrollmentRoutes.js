const express =
  require("express");

const {
  enrollCourse,
} = require(
  "../controllers/enrollmentController"
);

const router =
  express.Router();

router.post(
  "/enroll",
  enrollCourse
);

module.exports =
  router;