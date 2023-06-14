const validaUsuario = (req,res,next) =>{

    if(!req.body.nome){
        return res.status(400).send({message:"O campo 'nome' precisa ser preenchido"});
    }
    // validação se e realmente do tipo necessario
    if(req.body.nome){
        console.log(typeof(req.body.nome));
    }
    if(!req.body.email){
        return res.status(400).send({message:"O campo 'email' precisa ser preenchido"});
    }

    if(!req.body.senha){
        return res.status(400).send({message:"O campo 'senha' precisa ser preenchido"});
    }
    if(!req.body.imagem){
        return res.status(400).send({message:"O campo 'imagem' precisa ser preenchido"});
    }

    // precisa ter o return next,senao ele fica flutuando e nao faz nada
    return next();
}

module.exports = {
    validaUsuario
}