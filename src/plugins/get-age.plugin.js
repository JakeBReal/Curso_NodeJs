
//ADAPTAR EL ARCHIVO GET-AGE
const  getAgePluging = require('get-age');


//FUNCION PARA OBTENER LA EDAD
const getage =(birthdate) => {
   
    if(!birthdate ) return new Error('birthdate is required');
    return getAgePluging(birthdate);
}


//OBJETO PARA EXPORTAR EL GETAGE
module.exports = {
    getage,
}



