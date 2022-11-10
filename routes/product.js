const express = require("express");
const { allProducts } = require("../controllers/product");

const router = express.Router();

router.get("/", allProducts);

module.exports = router;
