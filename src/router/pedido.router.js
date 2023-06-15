const express = require("express");
const router = express.Router();

// importa o controler do usuario
const pedidoController = require("../controller/pedido.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaPedido,validaId} = require ("../middleware/validacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaId,pedidoController.findPedidoByIdController);
router.get("/findAll",authMiddleware,pedidoController.findAllPedidosController);

// metodo Post
router.post("/create",authMiddleware,validaPedido,pedidoController.createPedidoController);

// Metodo Patch so atualiza uma parte do objeto, o put atualiza o objeto inteiro
router.patch("/updateStatus/:id",authMiddleware,validaId,pedidoController.updateStatusPedidoController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaId,pedidoController.removePedidoController);

module.exports = router;