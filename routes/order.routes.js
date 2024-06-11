const router = require("express").Router();
const {
  CreateOrder,
  getOrder,
  getOrders,
  checkout
} = require("../controllers/order.controoler");

router.post("/checkout", checkout);
router.post("/:productID", CreateOrder);
router.get("/:id", getOrder);
router.get("/", getOrders);

module.exports = router;
