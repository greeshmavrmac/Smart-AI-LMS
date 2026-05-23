const Progress =
  require(
    "../models/Progress"
  );

const saveProgress =
  async (req, res) => {
    try {

      const {
        userId,
        courseId,
      } = req.body;

      let progress =
        await Progress.findOne(
          {
            userId,
            courseId,
          }
        );

      if (
        progress
      ) {

        progress.completed =
          true;

        progress.progress =
          100;

        await progress.save();

      } else {

        progress =
          await Progress.create(
            {
              userId,
              courseId,
              completed:
                true,
              progress:
                100,
            }
          );
      }

      res.json({
        message:
          "Progress Saved",
      });

    } catch (error) {

      console.log(
        error
      );

      res.status(
        500
      ).json({
        message:
          "Server Error",
      });
    }
  };

const getProgress =
  async (req, res) => {
    try {

      const {
        userId,
        courseId,
      } = req.params;

      const progress =
        await Progress.findOne(
          {
            userId,
            courseId,
          }
        );

      res.json(
        progress
      );

    } catch (error) {

      res.status(
        500
      ).json({
        message:
          "Server Error",
      });
    }
  };

const getUserProgress =
  async (req, res) => {
    try {

      const progress =
        await Progress.find(
          {
            userId:
              req.params
                .userId,
          }
        );

      res.json(
        progress
      );

    } catch (error) {

      res.status(
        500
      ).json({
        message:
          "Server Error",
      });
    }
  };

module.exports = {
  saveProgress,
  getProgress,
  getUserProgress,
};