const express = require("express");
const Product = require("../controller/productController");

const router = express.Router();

router.get("/product", Product.productList);

module.exports = router;