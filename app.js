const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const ProductRouter = require("./routes/product.routes");
const BookRouter = require("./routes/book.routes");
const ContactRouter = require("./routes/contact.routes");
const OrderRouter = require("./routes/order.routes");
const BlogRouter = require("./routes/blog.routes");
const ChefRouter = require("./routes/chef.routes");

env.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connented To DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/products", ProductRouter);
app.use("/contact", ContactRouter);
app.use("/books", BookRouter);
app.use("/orders", OrderRouter);
app.use("/chef", ChefRouter);
app.use("/blog", BlogRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `server is runing at http://localhost:${process.env.PORT || 8080} `
  );
});
