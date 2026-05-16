const Course =
  require("../models/Course");

const createCourse =
  async (req, res) => {
    try {

      const {
        title,
        description,
        instructor,
      } = req.body;

      const course =
        await Course.create({
          title,
          description,
          instructor,
        });

      res.status(201).json({
        message:
          "Course Created Successfully",
        course,
      });

    } catch (error) {
      res.status(500).json({
        message:
          "Course Creation Failed",
      });
    }
  };

const getCourses =
  async (req, res) => {
    try {

      const courses =
        await Course.find();

      res.status(200).json(
        courses
      );

    } catch (error) {
      res.status(500).json({
        message:
          "Failed to fetch courses",
      });
    }
  };

const getCourseById =
  async (req, res) => {
    try {

      const course =
        await Course.findById(
          req.params.id
        );

      res.status(200).json(
        course
      );

    } catch (error) {
      res.status(500).json({
        message:
          "Course not found",
      });
    }
  };

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
};