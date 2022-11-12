const express = require("express");
const { allProducts, orderAsc, orderDesc } = require("../controllers/product");

const router = express.Router();

router.get("/", allProducts);
router.get("/order-asc", orderAsc);
router.get("/order-desc", orderDesc);

module.exports = router;
