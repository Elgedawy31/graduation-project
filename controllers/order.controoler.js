const { OrderModel } = require("../models/order.model");

const CreateOrder = async (req, res, next) => {
  const { quantity, total, subTotal } = req.body;
  try {
    const savedOrder = new OrderModel({
      productID: req.params.productID,
      quantity,
      total,
      subTotal,
    });

    const SavedPro = await savedOrder.save();

    res.status(200).json(SavedPro);
  } catch (error) {
    res.status(404).json(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await OrderModel.find({ _id: req.params.id }).populate({
      path: "productID",
      select: "-description -productLocation",
    });

    res.status(200).json(order);
  } catch (error) {
    res.staus(500).json(error);
  }
};
const getOrders = async (req, res) => {
  try {
    const { query } = req;

    const search = {};
    query.title ? (search.title = query.title) : null;
    query.price ? (search.price = query.price) : null;
    query.type ? (search.type = query.type) : null;

    const order = await OrderModel.findOne(search).populate({
      path: "productID",
      select: "-description -productLocation",
    });

    res.status(200).json(order);
  } catch (error) {
    res.staus(500).json(error);
  }
};

module.exports = { getOrder, CreateOrder, getOrders };
