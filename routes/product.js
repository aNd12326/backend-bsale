const express = require("express");
const { allProducts } = require("../controllers/product");

const router = express.Router();

router.get("/products", allProducts);

module.exports = router;
