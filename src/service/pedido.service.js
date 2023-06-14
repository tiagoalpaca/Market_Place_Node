const Pedido = require("../model/Pedido");

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidosService = () => {
    return Pedido.find();
}

const createPedidoService =  (body) => {
    return Pedido.create(body);
}

const removePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
}

const updateStatusPedidoService =  (id, body) => {
    return Pedido.findByIdAndUpdate(id,body,{returnDocument:"after"});
}

module.exports = {
    findAllPedidosService,
    findPedidoByIdService,
    createPedidoService,
    removePedidoService,
    updateStatusPedidoService,
}