const express = require("express");
const router = express.Router();

// importa o controler do usuario
const carrinhoController = require("../controller/carrinho.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");

// metodos get
router.get("/find/:id",authMiddleware,carrinhoController.findCarrinhoByIdController);
router.get("/findAll",authMiddleware,carrinhoController.findAllCarrinhosController);

// metodo Post
router.post("/create",authMiddleware,carrinhoController.createCarrinhoController);

// Metodo Put
router.put("/update/:id",authMiddleware,carrinhoController.updateCarrinhoController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,carrinhoController.removeCarrinhoController);

module.exports = router;