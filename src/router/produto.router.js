const express = require("express");
const router = express.Router();

// importa o controler do usuario
const produtoController = require("../controller/produto.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaProduto} = require ("../middleware/validacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,produtoController.findProductByIdController);
router.get("/findAll",authMiddleware,produtoController.findAllProductsController);

// metodo Post
router.post("/create",authMiddleware,validaProduto,produtoController.createProductController);
router.post("/addCategoria/:id",authMiddleware,produtoController.addCategoriaProdutoController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaProduto,produtoController.updateProductController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,produtoController.removeProductController);
router.delete("/removeCategoria/:id",authMiddleware,produtoController.removeCategoriaProdutoController);

module.exports = router;