// npm i express,mongoose e jsonwebtoken
// npc i -D nodemon

// express
const express = require("express");
const app = express();

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
app.use("/usuario",usuario);

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
