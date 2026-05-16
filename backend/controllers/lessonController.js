const Lesson =
  require("../models/Lesson");

const createLesson =
  async (req, res) => {
    try {

      const {
        title,
        videoUrl,
        courseId,
      } = req.body;

      const lesson =
        await Lesson.create({
          title,
          videoUrl,
          courseId,
        });

      res.status(201).json({
        message:
          "Lesson Created Successfully",
        lesson,
      });

    } catch (error) {
      res.status(500).json({
        message:
          "Lesson Creation Failed",
      });
    }
  };

const getLessons =
  async (req, res) => {
    try {

      const lessons =
        await Lesson.find({
          courseId:
            req.params.courseId,
        });

      res.status(200).json(
        lessons
      );

    } catch (error) {
      res.status(500).json({
        message:
          "Failed to fetch lessons",
      });
    }
  };

module.exports = {
  createLesson,
  getLessons,
};