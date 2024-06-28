// PARA OPCION 1, 2,3
// const getpokemonById = (id, callback) => {
// const url =`https://pokeapi.co/api/v2/pokemon/${id}`;

// OPCION#1
// return 'POKEMON';

// OPCION#2
// FETCH ES UNA PROMESA
// fetch(url)
// .then( (response) => {
// return response.json 
//     //OTRA PROMESA
//     response.json().then( (pokemon) => {

//         //UTILIAZAMOS CALLBACK PARA PODER LLLMAR 2 PROMESAS
//    callback( pokemon.name );    
// });
// });


//OPCION#3
// FETCH ES UNA PROMESA
// return fetch(url)
// .then( (response) => response.json()) 
// // .then( () => { throw new Error('El pokemon no exist')})
// .then( (pokemon) => pokemon.name);

// }

// OPCION#4 SERIA LA FORMA MAS CORTA Y FACIL DE LLER
// const getpokemonById = async (id) => {
//     const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
   
//     const responde = await fetch(url);
//    const pokemon = await responde.json();

//    return pokemon.name;
// }

// OPCION#5 SERIA LA FORMA MAS CORTA Y FACIL DE LLER
const {http} = require('../plugins');
const getpokemonById = async (id) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
const pokemon = await http.get(url);
return pokemon.name;
}

module.exports =getpokemonById;

