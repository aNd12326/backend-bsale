const { Router } = require("express");
// Importar todos los routers;
const productRoute = require("./product");
const categoryRoute = require("./category");

const router = Router();
// configurando las rutas
router.use("/products", productRoute);
router.use("/categories", categoryRoute);

module.exports = router;
