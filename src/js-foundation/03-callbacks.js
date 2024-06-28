

// ARREGLO  de objetos

const users = [
{
    id: 1,
    name: 'John Doe',
},
{
    id: 2,
    name: 'Jane Doe',
}
];

// FUNCION PARA BUSCAR 
function getUserById(id, callback) {
    const user = users.find(function (user){
        return user.id === id;
    });


    if (!user){
        return callback(`User not found with id ${id}`);
    }
    return callback (null, user);
}

// getUserById(2) ;

module.exports ={
    getUserById,
} 