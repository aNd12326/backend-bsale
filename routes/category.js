const express = require("express");
const { allCategories } = require("../controllers/category");
const { joinByCategory } = require("../controllers/product");

const router = express.Router();

// ruta para obtener todas las categorias
router.get("/", allCategories);

// ruta para obtener todos los productos por categoria
router.get("/:id", joinByCategory);

module.exports = router;
