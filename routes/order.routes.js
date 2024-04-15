const router = require("express").Router();
const {
  CreateOrder,
  getOrder,
  getOrders,
} = require("../controllers/order.controoler");

router.post("/:productID", CreateOrder);
router.get("/:id", getOrder);
router.get("/", getOrders);

module.exports = router;
