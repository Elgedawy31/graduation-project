const { default: Stripe } = require("stripe");
const { OrderModel } = require("../models/order.model");
const stripe = require("stripe")(
  "sk_test_51NE9ReJO7nATFrqGbshK1OQDsJ9r8fPzRRoVyClCtVWUHP3Uj5zpx3qkuODeRoIGUxSNEPosd8FawRlITL7lUZHY00KMqPrVNU"
);
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
const deleteOrder = async (req, res) => {
  try {
    const order = await OrderModel.findByIdAndDelete(req.params.id).populate({
      path: "productID",
      select: "-description -productLocation",
    });

    res.status(200).json('done deleted');
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

    const order = await OrderModel.find(search).populate({
      path: "productID",
      select: "-description -productLocation",
    });

    res.status(200).json(order);
  } catch (error) {
    res.staus(500).json(error);
  }
};
const checkout = async (req, res) => {
  const { products } = req.body;
  const lineItems = products.map((ele) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: ele?.productID?.title,
        images:[ele?.productID?.imageUrl]
      },
      unit_amount: Math.round(ele?.productID?.price * 100),
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items:lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/order",
    cancel_url: "http://localhost:3000",
  });

  res.send({ id: session?.id });
};

module.exports = { getOrder, CreateOrder, getOrders, checkout ,deleteOrder };
