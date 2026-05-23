const Course =
  require(
    "../models/Course"
  );

const createCourse =
  async (req, res) => {
    try {

      const {
        title,
        courseUrl,
      } = req.body;

      const course =
        await Course.create({
          title,
          courseUrl,
        });

      res.status(201).json({
        message:
          "Course Created Successfully",
        course,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Server Error",
      });
    }
  };

const getAllCourses =
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
          "Server Error",
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
          "Server Error",
      });
    }
  };

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
};