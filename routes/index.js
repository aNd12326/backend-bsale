const { Router } = require("express");
// Importar todos los routers;
const productRoute = require("./product");
const categoryRoute = require("./category");

const router = Router();
router.use("/products", productRoute);
router.use("/categories", categoryRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
