const { CreateBook, getBooks, getBook } = require("../controllers/book.controller");

const router = require("express").Router();


router.post("/", CreateBook);
router.get("/", getBooks);
router.get("/:id", getBook);

module.exports = router;
