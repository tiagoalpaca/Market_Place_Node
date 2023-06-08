const usuarioService = require("../service/");
const mongoose = require("mongoose");


// cria a função para procurar um usuario especifico
const findUserByIdController = async (req,res)=>{
     // toda interação com o BD é bom usar o try,catch para melhorar tudo, para tentar conter danos. Toda interação é bom utilizar.
   try{
        //os tipos aceitos pelo mongoose,vamos testar o tipo do id
        const id = mongoose.Types.ObjectId(req.params.id);
        let found = false;

        const usuario = await usuarioService.findById(id);

        if(usuario !=null){
             found=true;
        }       

        if(!found){
         // informa o status que nao foi encontrado+ msg
               return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }

    // vai buscar o id, retorno await
    return res.status(200).send(await Usuario.findById(id));

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
}

// Uma função para encontrar todos os usuarios, 
const findAllUsersController = async (req,res)=>{
    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
    // vai listar todas as informacoes da lista
    return res.status(200).send(await usuarioService.findAllUsuarios());
}

// cria a função de criar um usuario
const createUserController = async (req,res) => {
    const usuario = req.body;
    try{

    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

    // vai encontrar todas as chaves que ele encontrar do objeto, o object.keys
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "o corpo da mensagem esta vazio"});
    }
    // validar o ID
    if(!usuario.id){
        return res.status(400).send({message:"O campo'id'nao foi encontrado"})
    }
    // validar nome
    if(!usuario.nome){
        return res.status(400).send({message:"O campo 'nome' nao foi encontrado"})
    }
    // validar idade
    if(!usuario.idade){
        return res.status(400).send({message:"O campo 'idade' nao foi encontrado"})
    }
    // validar altura
    if(!usuario.altura){
        return res.status(400).send({message:"O campo 'altura' nao foi encontrado"})
    }
    // validar formacao
    if(!usuario.formacao){
        return res.status(400).send({message:"O campo 'formacao' nao foi encontrado"})
    }
    
    return res.status(201).send(await usuarioService.createUsuario(usuario));
}

// função para fazer o update
const updateUserController  = async (req,res) =>{
     // a rota vai te que aceitar parametros,para saber qual usuario estamos referenciando 
     const id = req.params.id;
     const usuario = req.body;
    //  let found = false;

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

     if(Object.keys(usuario).lenght === 0){
        return res.status(400).send({message: "o corpo da mensagem esta vazio"});
    }
    // validar o ID
    if(!usuario.id){
        return res.status(400).send({message:"O campo'id'nao foi encontrado"})
    }
    // validar nome
    if(!usuario.nome){
        return res.status(400).send({message:"O campo 'nome' nao foi encontrado"})
    }
    // validar idade
    if(!usuario.idade){
        return res.status(400).send({message:"O campo 'idade' nao foi encontrado"})
    }
    // validar altura
    if(!usuario.altura){
        return res.status(400).send({message:"O campo 'altura' nao foi encontrado"})
    }
    // validar formacao
    if(!usuario.formacao){
        return res.status(400).send({message:"O campo 'formacao' nao foi encontrado"})
    }
    return res.status(200).send(await usuarioService.updateUsuario(id,usuario));
    
}

// função para fazer o delete
const removeUserController = async (req,res) =>{

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

    // a rota vai te que aceitar parametros,para saber qual usuario estamos referenciando 
    const id = req.params.id;
    // let found = false;

    return res.status(200).send(await usuarioService.deleteUsuario(id));
}

const addUserAdressController = async(req,res) =>{

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }


}

const removeUserAdressController = async(req,res) =>{

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

    
}

const addUserFavProductController = async(req,res) =>{

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

    
}

const removeUserFavProductController  = async(req,res) =>{

    try{
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }

    
}

module.exports ={
    findAllUsersController,
    createUserController ,
    findUserByIdController,
    updateUserController,
    addUserAdressController,
    removeUserController,
    removeUserAdressController,
    addUserFavProductController,
    removeUserFavProductController
}