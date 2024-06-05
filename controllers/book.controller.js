const { BookModel } = require("../models/book.model");

const CreateBook = async (req, res, next) => {
  try {
    const savedBook = new BookModel(req.body);

    const SavedPro = await savedBook.save();

    res.status(200).json(SavedPro);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getBooks = async (req, res, next) => {
  try {
    const { query } = req;

    const search = {};
    query.email ? (search.email = query.email) : null;
    query.name ? (search.name = query.name) : null;
    query.persons ? (search.persons = query.persons) : null;
    query.phone ? (search.phone = query.phone) : null;

    const Products = await BlogModal.find(search);

    !Products && res.status(404).json("Books Not Founded");

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBook = async (req, res, next) => {
  try {
    const { params } = req;

    const Books = await BlogModal.findOne({ _id: params.id });

    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CreateBook, getBooks, getBook };
