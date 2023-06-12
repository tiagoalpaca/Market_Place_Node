// npm i express,mongoose e jsonwebtoken
// npc i -D nodemon

// express
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
// vai chamar o dotenv antes de qualquer arquivo que precise dele
require("dotenv").config();
// Porta vai ser a 3000
const port = 3000;

// api rest 
app.use(express.json());

const mongoose = require('mongoose');
// importar a função para conecter database
 const connectToDatabase = require("./src/database/database"); 
connectToDatabase();

// importar as rotas do usuario e as chamando
const usuario= require("./src/router/usuario.router");
// Importa as rotas auth
const auth = require("./src/router/auth.router");
// Importa as rotas do produto
const produto = require("./src/router/produto.router");
// Importa as rotas da categoria
const categoria = require("./src/router/categoria.router");

// Chamando as rotas do usuario,auth e produto
app.use("/usuario", usuario);
app.use("/auth", auth);
app.use("/produto", produto);
app.use("/categoria", categoria);

app.get("/",(req,res)=> {
    res.send({
        message:"Bem vindo ao Market Place"
    });
})

// listen serve para observar, ve se alguem esta mandando alguma solicitação
app.listen(port,()=>{
    // acrescentar o http no localhost facilita pois ai ele ja vira um link
    console.log('Servidor rodando em http://localhost:'+port);
})
