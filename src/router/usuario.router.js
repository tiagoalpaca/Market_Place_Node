 // As rotas são para melhorar os endpoints e pra saber para onde vão apontar quando necessario
// const router = require("express").Router(); 
const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/usuario.controller");

// vamos importar o controller, O . ponto serve para algo no seu mesmo nivel, . . vc volta 2 nivel na questão de pastas da arquitetura, como esta dentro da pasta controller precisamos de ..
const usuario = require("../controller/usuario.controller");
// o router possui os métodos HTTP,faz o gerenciamento primario do que vai disparado quando o usuario clicar
// findAll é o outro campo para algo que vai disparado quando o get for chamado, normalmente uma função.
// apos importar do controller temos as funções que passamos no router

router.get("/find/:id", usuario.find); 
router.get("/findAll", usuario.findAllUsuarios);

router.post("/create", usuario.createUsuario);
router.post("/addAddress/:id", );
router.post("/addFavProduct/:id", );

router.put("/update/:id", usuario.updateUsuario);

router.delete("/remove/:id", usuario.deleteUsuario);
router.delete("/removeAddress", usuario.deleteUsuario);
router.delete("/removeFavProduct", usuario.deleteUsuario);

// para exportar os routers
module.exports = router;