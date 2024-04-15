const { ContactModel } = require("../models/contact.model");

const CreateContact = async (req, res, next) => {
  try {
    const savedContact = new ContactModel(req.body);

    const SavedPro = await savedContact.save();

    res.status(200).json(SavedPro);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getContacts = async (req, res, next) => {
  try {
    const { query } = req;

    const search = {};
    query.email ? (search.email = query.email) : null;
    query.name ? (search.name = query.name) : null;
    query.subject ? (search.subject = query.subject) : null;
    query.phone ? (search.phone = query.persons) : null;

    const Products = await ContactModel.find(search);

    !Products && res.status(404).json("Contacts Not Founded");

    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getContact = async (req, res, next) => {
  try {
    const { params } = req;

    const Books = await ContactModel.findOne({ _id: params.id });

    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CreateContact, getContacts, getContact };
