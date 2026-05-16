const Enrollment =
  require(
    "../models/Enrollment"
  );

const enrollCourse =
  async (req, res) => {
    try {

      const {
        userId,
        courseId,
      } = req.body;

      if (
        !userId ||
        !courseId
      ) {
        return res
          .status(400)
          .json({
            message:
              "Missing data",
          });
      }

      const enrollment =
        await Enrollment.create({
          userId,
          courseId,
        });

      res.status(201).json({
        message:
          "Enrolled Successfully",
        enrollment,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Enrollment Failed",
      });
    }
  };

module.exports = {
  enrollCourse,
};