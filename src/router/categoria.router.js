const express = require("express");
const router = express.Router();

// importa o controler do usuario
const categoriaController = require("../controller/categoria.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");
// importar o middleware para fazer as validações,normalmente as validações ocorrem no Post e no Put
const {validaCategoria,validaId} = require ("../middleware/validacao.middleware");

// metodos get
router.get("/find/:id",authMiddleware,validaId,categoriaController.findCategoriaByIdController);
router.get("/findAll",authMiddleware,categoriaController.findAllCategoriasController);

// metodo Post
router.post("/create",authMiddleware,validaCategoria,categoriaController.createCategoriaController);

// Metodo Put
router.put("/update/:id",authMiddleware,validaId,validaCategoria,categoriaController.updateCategoriaController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,validaId,categoriaController.removeCategoriaController);

module.exports = router;