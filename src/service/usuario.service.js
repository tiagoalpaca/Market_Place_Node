const Usuario = require("../model/Usuario");

// Dentro do service não precisa do asyn await, no controller sin
const findUserbyIdService = (id) =>{
    return Usuario.findById(id);
}

const findAllUsersService = () =>{
    return Usuario.find();
}

const createUserService = (body) =>{
    return Usuario.create(body);
}

const updateUserService = (id,usuario) => {
    return Usuario.findByIdAndUpdate(id,usuario,{returnDocument:"after"});
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

const addUserAddressService = (id,usuario) => {
    
}

const removeUserAddressService = (id) => {
    
}
const addUserFavProductService = (id,usuario) => {
    
}
const removeUserFavProductService = (id) => {
    
}


module.exports = {
    findUserbyIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService

}