const mongoose = require("mongoose");

const OrderShcema = new mongoose.Schema(
  {
 
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("order", OrderShcema);

module.exports = {
  OrderModel,
};
