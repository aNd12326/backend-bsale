const express = require("express");
const { joinsCategory } = require("../controllers/product");

const router = express.Router();

router.get("/:id", joinsCategory);

module.exports = router;
