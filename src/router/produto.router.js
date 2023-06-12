const express = require("express");
const router = express.Router();

// importa o controler do usuario
const produtoController = require("../controller/produto.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");

// metodos get
router.get("/find/:id",authMiddleware,produtoController.findProductByIdController);
router.get("/findAll",authMiddleware,produtoController.findAllProductsController);

// metodo Post
router.post("/create",authMiddleware,produtoController.createProductController);

// Metodo Put
router.put("/update/:id",authMiddleware,produtoController.updateProductController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,produtoController.removeProductController);

module.exports = router;