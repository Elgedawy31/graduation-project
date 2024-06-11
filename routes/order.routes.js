const router = require("express").Router();
const {
  CreateOrder,
  getOrder,
  getOrders,
  checkout
} = require("../controllers/order.controoler");

router.post("/:productID", CreateOrder);
router.get("/:id", getOrder);
router.get("/", getOrders);
router.post("/checkout", checkout);

module.exports = router;
