const express = require("express");
const { allProducts, orderAsc, orderDesc } = require("../controllers/product");

const router = express.Router();

// ruta para obtener todos los productos o productos por nombre
router.get("/", allProducts);

// ruta para obtener todos los productos ordenados ascendentemente por nombre
router.get("/order-asc", orderAsc);

// ruta para obtener todos los productos ordenados descendentemente por nombre
router.get("/order-desc", orderDesc);

module.exports = router;
