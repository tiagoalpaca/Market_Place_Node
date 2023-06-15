const ObjectId = require("mongoose").Types.ObjectId;

// Precisa validar tudo o que é require no sistema
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

const validaPedido = (req,res,next) =>{
    // vetor para acumular os erros
    let erros = [];

    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }
    if(!req.body.frete){
        erros.push("Frete");
    }
    // validação é diferente,pois se trata de um booleano
    if(req.body.concluido == undefined){
        erros.push("Concluido");
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

const validaCarrinho = (req,res,next) =>{
      // vetor para acumular os erros
      let erros = [];

      if(!req.body.precoTotal){
          erros.push("precoTotal");
      }
      if(!req.body.frete){
          erros.push("Frete");
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

const validaId = (req,res,next) =>{
    if(ObjectId.isValid(req.params.id)){
        return next();
    }else{
        return res.status(400).send({message:"O campo ID não corresponde aos padroes necessarios"}); 
    }
}

const validaLogin = (req,res,next) =>{
    // vetor para acumular os erros
    let erros = [];

    if(!req.body.email){
        erros.push("email");
    }
    if(!req.body.senha){
        erros.push("Senha");
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

module.exports = {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaId,
    validaLogin
}