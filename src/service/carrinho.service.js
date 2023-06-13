const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhosService = () => {
    return Carrinho.find();
}

const createCarrinhoService =  (body) => {
    return Carrinho.create(body);
}

const updateCarrinhoService =  (id, body) => {
    return Carrinho.findByIdAndUpdate(id,body,{returnDocument:"after"});
}

const removeCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}

module.exports = {
    findAllCarrinhosService,
    findCarrinhoByIdService,
    createCarrinhoService,
    updateCarrinhoService,
    removeCarrinhoService
}