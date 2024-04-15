const {
  CreateChef,
  getChefs,
  getChef,
} = require("../controllers/chef.controller");

const router = require("express").Router();

router.post("/", CreateChef);
router.get("/", getChefs);
router.get("/:id", getChef);

module.exports = router;
