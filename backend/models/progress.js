const mongoose =
  require("mongoose");

const progressSchema =
  new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },

      courseId: {
        type: String,
        required: true,
      },

      completed: {
        type: Boolean,
        default: false,
      },

      progress: {
        type: Number,
        default: 0,
      },
    }
  );

module.exports =
  mongoose.model(
    "Progress",
    progressSchema
  );