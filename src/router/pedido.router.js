const express = require("express");
const router = express.Router();

// importa o controler do usuario
const pedidoController = require("../controller/pedido.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");

// metodos get
router.get("/find/:id",authMiddleware,pedidoController.findPedidoByIdController);
router.get("/findAll",authMiddleware,pedidoController.findAllPedidosController);

// metodo Post
router.post("/create",authMiddleware,pedidoController.createPedidoController);

// Metodo Put
router.put("/update/:id",authMiddleware,pedidoController.updateStatusPedidoController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,pedidoController.removePedidoController);

module.exports = router;