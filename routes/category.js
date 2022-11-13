const express = require("express");
const { allCategories } = require("../controllers/category");
const { joinsCategory } = require("../controllers/product");

const router = express.Router();

// getting all categories
router.get("/", allCategories);
// getting all the products by their category
router.get("/:id", joinsCategory);

module.exports = router;
