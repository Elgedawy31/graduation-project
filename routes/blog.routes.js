const { CreateBlog, getBlogs, getBlog } = require("../controllers/blog.controller");

const router = require("express").Router();


router.post("/", CreateBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);

module.exports = router;
