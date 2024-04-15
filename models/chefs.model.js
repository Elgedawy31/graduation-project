const mongoose = require("mongoose");

const ChefShcema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    expirence: {
      type: String,
      required: true,
    },
    links: {
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

const ChefModel = mongoose.model("Chef", ChefShcema);

module.exports = {
  ChefModel,
};
