const router = require("express").Router();
const {
  CreateOrder,
  getOrder,
  getOrders,
  checkout,
  deleteOrder,
} = require("../controllers/order.controoler");

router.post("/checkout", checkout);
router.post("/:productID", CreateOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);
router.get("/", getOrders);

module.exports = router;
