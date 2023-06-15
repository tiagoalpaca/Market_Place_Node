const express = require("express");
const router = express.Router();

// importa o controler do usuario
const produtoController = require("../controller/produto.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaProduto,validaId} = require ("../middleware/validacao.middleware");
// importar o middleware para fazer a paginacao
const paginacao = require ("../middleware/paginacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaId,produtoController.findProductByIdController);
router.get("/findAll",authMiddleware,paginacao,produtoController.findAllProductsController);

// metodo Post
router.post("/create",authMiddleware,validaProduto,produtoController.createProductController);
router.post("/addCategoria/:id",authMiddleware,validaId,produtoController.addCategoriaProdutoController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaId,validaProduto,produtoController.updateProductController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaId,produtoController.removeProductController);
router.delete("/removeCategoria/:id",authMiddleware,validaId,produtoController.removeCategoriaProdutoController);

module.exports = router;