const userService = require("../service/usuario.service");
const mongoose = require("mongoose");


// cria a função para procurar um usuario especifico
const findUserByIdController = async (req,res)=>{
     // toda interação com o BD é bom usar o try,catch para melhorar tudo, para tentar conter danos. Toda interação é bom utilizar.

   try{

        const user = await userService.findUserbyIdService(req.params.id);
        
        if(!user){
            return res.status(404).send({message:"Não foi encontrado,tente outro ID"});
        }

        return res.status(200).send(user);
        
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        if(err){
            // vamos ver o tipo de erro e comparar
            console.log(err.king == "ObjectId");
            return res.status(500).send("ID informado esta incorreto,tente novamante");
        }
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
}

// Uma função para encontrar todos os usuarios, 
const findAllUsersController = async (req,res)=>{
    try{

        return res.status(200).send(await userService.findAllUsersService());
    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
}

// cria a função de criar um usuario
const createUserController = async (req,res) => {
    const usuario = req.body;
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message:"O campo 'nome' nao foi encontrado"});
        }
        return res.status(201).send(await userService.createUserService(body));

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
    
}

// função para fazer o update
const updateUserController  = async (req,res) =>{
     
    const usuario = req.body;
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message:"O campo 'nome' nao foi encontrado"});
        }
        return res.status(201).send(await userService.updateUserService(req.params.id,body));

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
        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

         if(deletedUser == null){
            res.status(404).send({message: 'Usuario nao encontado,tente novamente!'});
         }else{
             res.status(200).send({message: 'Sucesso,usuario deletado'});
        }

    }catch(err){
        // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
        console.log('erro: '+err);
        return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const addUserAdressController = async(req,res) =>{

    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id,req.body);

        if(endereco.ok ==1){
            res.status(201).send({message: 'Endereco adicionado com sucesso'})
        }else{
            res.status(404).send({message: 'Algo deu errado no endereço,tente novamante!'});
        }
        
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

const removeUserAdressController = async(req,res) =>{

    try{
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        endereco.value.enderecos.map((valor, chave) =>{
            if(valor._id == req.body.addressId){
                found = true;
            }
        })
        if(found){
            res.status(200).send({message: 'Endereco removido com sucesso'})
        }else{
            res.status(404).send({message: 'Algo deu errado no endereço,endereco nao foi removido,tente novamante!'});
        }
    }catch(err){
    // console.log é interno, entao vc saberia do codigo do erro. Nunca é bom dar mensagem do codigo do erro para pessoas de fora do sistema
    console.log('erro: '+err);
    return res.status(500).send("erro no servidor,tenta novamante mais tarde");
    }
};

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