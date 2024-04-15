const mongoose = require("mongoose");

const BlogShcema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("blog", BlogShcema);

module.exports = {
  BlogModel,
};
