const { CreateContact, getContacts, getContact } = require("../controllers/contact.controller");

const router = require("express").Router();


router.post("/", CreateContact);
router.get("/", getContacts);
router.get("/:id", getContact);

module.exports = router;
