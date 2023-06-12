const express = require("express");
const router = express.Router();

// importa o controler do usuario
const categoriaController = require("../controller/categoria.controller");

// importar o middleware para fazer as verificações
const authMiddleware = require ("../middleware/auth.middleware");

// metodos get
router.get("/find/:id",authMiddleware,categoriaController.findCategoriaByIdController);
router.get("/findAll",authMiddleware,categoriaController.findAllCategoriasController);

// metodo Post
router.post("/create",authMiddleware,categoriaController.createCategoriaController);

// Metodo Put
router.put("/update/:id",authMiddleware,categoriaController.updateCategoriaController);

// Metodo Delete
router.delete("/delete/:id",authMiddleware,categoriaController.removeCategoriaController);

module.exports = router;