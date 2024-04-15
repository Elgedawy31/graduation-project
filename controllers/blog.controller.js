const { BlogModel } = require("../models/blog.model");

const CreateBlog = async (req, res, next) => {
  try {
    const savedBlog = new BlogModel(req.body);

    const SavedPro = await savedBlog.save();

    res.status(200).json(SavedPro);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getBlogs = async (req, res, next) => {
  try {
    const { query } = req;

    const search = {};
    query.title ? (search.title = query.title) : null;

    const Products = await BlogModel.find(search);

    !Products && res.status(404).json("Blogs Not Founded");

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getBlog = async (req, res, next) => {
  try {
    const { params } = req;

    const Blogs = await BlogModel.findOne({ _id: params.id });

    res.status(200).json(Blogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CreateBlog, getBlogs, getBlog };
