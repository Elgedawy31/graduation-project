const { ChefModel } = require("../models/chefs.model");

const CreateChef = async (req, res, next) => {
  try {
    const savedChef = new ChefModel(req.body);

    const SavedPro = await savedChef.save();

    res.status(200).json(SavedPro);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getChefs = async (req, res, next) => {
  try {
    const { query } = req;

    const search = {};
    query.email ? (search.email = query.email) : null;
    query.name ? (search.name = query.name) : null;
    query.phone ? (search.phone = query.name) : null;
    query.experience ? (search.experience = query.name) : null;
    query.type ? (search.type = query.name) : null;
    query.location ? (search.location = query.name) : null;

    const Products = await ChefModel.find(search);

    !Products && res.status(404).json("Chefs Not Founded");

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getChef = async (req, res, next) => {
  try {
    const { params } = req;

    const Chefs = await ChefModel.findOne({ _id: params.id });

    res.status(200).json(Chefs);
  } catch (error) {
    res.status(500).json(error);
  }
};
const removeChef = async (req, res, next) => {
  try {
    const { params } = req;

    const Chefs = await ChefModel.findOneAndDelete({ _id: params.id });

    res.status(200).json(Chefs);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CreateChef, getChefs, getChef ,removeChef };
