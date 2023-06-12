const Usuario = require("../model/Usuario");

// Dentro do service não precisa do asyn await, no controller sim
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

const addUserAddressService = (id,endereco) => {
    return Usuario.findOneAndUpdate({
        _id: id,

    },
    {
        $push:{
            enderecos:endereco,
        }
    },
    {
        rawResult:true,
    }
    );
}

const removeUserAddressService = (id,addressId) => {
    return Usuario.findOneAndUpdate({
        _id: id,

    },
    {
        $pull:{
            enderecos:{
               _id:addressId,
            },
         }
    },
    {
        rawResult:true,
    }
    );
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