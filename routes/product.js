const express = require("express");
const { allProducts, orderAsc, orderDesc } = require("../controllers/product");

const router = express.Router();

// route all Products + route product by name
router.get("/", allProducts);
// route to sort products in ascending order
router.get("/order-asc", orderAsc);
// route to sort products in descending order
router.get("/order-desc", orderDesc);

module.exports = router;
