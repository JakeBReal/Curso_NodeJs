// asi es con una funcion de terceros
// const { v4: uuidv4 } = require('uuid');

const { getId, getage } = require("../plugins");


// asi es con una funcion de terceros
// const  getAge = require('get-age');


// AQUI ES USANDO EL ARCHIVO CORRESPONDIENTE
// const { getId } = require('../plugins/get-id.plugin');

// AQUI ES USANDO EL ARCHIVO CORRESPONDIENTE
// const { getage } = require('../plugins/get-age.plugin')


   // ESTO SE COMENTO PARA QUE AYA MENOS DEPEDENCIA
// const { getage , getId } = require('../plugins');

const funcionX2Edad =( {getId,getage} ) => {
   return ( { name, birthdate } ) => {

   return{
      id: getId(),
      name: name,
      birthdate: birthdate,
      age: getage(birthdate),

}}
}

module.exports = { 
   funcionX2Edad,
};

   // ESTO SE COMENTO PARA QUE AYA MENOS DEPEDENCIA

// const funcionedad = ( { name, birthdate } ) => {
//     return{
//        id: getId(),
//        name: name,
//        birthdate: birthdate,
//        age: getage(birthdate),
//     }
//    }
   
   
   
   // ESTO SE COMENTO PARA QUE AYA MENOS DEPEDENCIA
   // const datos =   {name:'Jake' , birthdate:'2003-05-30'};
   // const datos2 =  funcionedad (datos);
   // console.log(datos2);

   module.exports = { 
      funcionX2Edad,
   };