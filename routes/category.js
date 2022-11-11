const express = require("express");
const { allCategories } = require("../controllers/category");
const { joinsCategory } = require("../controllers/product");

const router = express.Router();

router.get("/", allCategories);
router.get("/:id", joinsCategory);

module.exports = router;
