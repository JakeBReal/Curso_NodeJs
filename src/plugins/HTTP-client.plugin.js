//  ESTO E UN PATRON ADAPTADOR DE TERCEROS
// PRIMERA FORMA DE ADAPTADOR 

//  const httpclientplugin = {
//  get : async(url) => {

//     const responde = await fetch(url);
//     return await responde.json();
//  },
 
//  post: async(url,body) => {},
//  put: async(url,body) => {},
//  delete: async(url) => {},
// };

//  module.exports ={
//     // LO RENOMBRE CON HTTP
//      http: httpclientplugin,
//  } 

// AXIOS 
// SEGUNDA FORMA DE ADAPTADOR
const axios = require('axios');

const httpclientplugin = {
    get : async(url) => {
   
       const {data} = await axios.get(url);
       return data;
    },
    post: async(url,body) => {},
    put: async(url,body) => {},
    delete: async(url) => {},
   };
   
    module.exports ={
       // LO RENOMBRE CON HTTP
        http: httpclientplugin,
    } 