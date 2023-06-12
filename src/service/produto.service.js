const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
}

const findAllProductsService = () => {
    return Produto.find();
}

const createProductService =  (body) => {
    return Produto.create(body);
}

const updateProductService =  (id, body) => {
    return Produto.findByIdAndUpdate(id,body,{returnDocument:"after"});
}

const removeProductService = (id) => {
    return Produto.findByIdAndRemove(id);
}

module.exports = {
    findAllProductsService,
    findProductByIdService,
    createProductService,
    updateProductService,
    removeProductService
}