const express =
  require("express");

const router =
  express.Router();

const {
  saveProgress,
  getProgress,
  getUserProgress,
} = require(
  "../controllers/progressController"
);

router.post(
  "/save",
  saveProgress
);

router.get(
  "/:userId/:courseId",
  getProgress
);

router.get(
  "/user/:userId",
  getUserProgress
);

module.exports =
  router;