const validaUsuario = (req,res,next) =>{
    // Nessa função testa um erro por vez e toma uma decisão por vez
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

const validaProduto = (req,res,next) =>{

    // vetor para acumular os erros
    let erros = [];
    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.descricao){
        erros.push("descrição");
    }
    if(!req.body.precoUnitario){
        erros.push("precoUnitario");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }
    if(!req.body.codigoBarra){
        erros.push("codigoBarra");
    }

    if(erros.length == 0){
         // precisa ter o return next,senao ele fica flutuando e nao faz nada
     return next();

    }else{
        if(erros.length > 1){
            return res.status(400).send({message:"Os campos "+ erros +  " precisam ser preenchidos!!"}); 
        }else{
            return res.status(400).send({message:"O campo "+ erros +  " precisa ser preenchido!!"}); 
        }
    }
}

const validaCategoria = (req,res,next) =>{

    if(!req.body.nome){
        return res.status(400).send({message:"O campo 'nome' precisa ser preenchido"});
    }
    // precisa ter o return next,senao ele fica flutuando e nao faz nada
    return next();
}

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria
}