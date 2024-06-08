const {
  CreateChef,
  getChefs,
  getChef,
  removeChef,
} = require("../controllers/chef.controller");

const router = require("express").Router();

router.post("/", CreateChef);
router.get("/", getChefs);
router.get("/:id", getChef);
router.delete("/:id", removeChef);

module.exports = router;
