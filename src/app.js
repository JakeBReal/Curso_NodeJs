




// console.log('Hola mundo desde app.JS con Json.SCRIPTS');
//  console.log('Probando nodemon actualizando solo');
// console.log('Probando nactualizacion automatica2');


//REQUIRE es una palabra(funcion) reservada y
// sirve para poder llamar o importar
//  un archivo

// require('./js-foundation/01-template');


//ESO FUNCIUONA TABIEN PARA EXPORTAR CUANDO SE USA 
// module.exports ={
//     emailTemplate
// const templateExports = require('./js-foundation/01-template');
// console.log(templateExports.emailTemplate);


// Esto seria otra forma de exportar 
// const {emailtemplate} = require('.js-foundation/01-template');
// console.log(templateExports.emailTemplate);


// require('./js-foundation/02-destructuring');


// const {getUserById} = require('./js-foundation/03-callbacks');


// const {getUserById} = require('./js-foundation/04-arrow');


// const id = 2;
// // Primer agumento ERROR=devuelve un error si existe 
// getUserById (id,   (error, user) =>{
//     if (error) {
//         throw new Error(error);
//     }
//     console.log({user});
// }
// );


// ! 05-FACTORYFUNCTIONS DEPENDING
//     const {funcionX2Edad } =  require('./js-foundation/05-FactoryFunction');
// const { getId, getage } = require('./plugins');

// const makefuncionX2edad =  funcionX2Edad({ getId, getage });

// const datos = {name:'Jake' , birthdate:'2003-05-30'};

// const datos2 =  makefuncionX2edad (datos);

// console.log({datos2});




//! PROMESAS
// const getpokemonById = require('./js-foundation/06-Promesas');

// OPCION#1
// console.log( getpokemonById);

// OPCION#2
// getpokemonById(5,(pokemon) => {
//     console.log( {pokemon} )  ;
// });

// OPCION#3
// getpokemonById(4)
// .then((pokemon) => console.log( {pokemon} ))
// .catch ((err) => console.log( 'El pokemon sigue sin existir' ))
// .finally ( () => console.log('Finalmente se ingreso el pokemon'))



//! LOGGERS ( WINSTON) AND

const {buildlloger}= require('./plugins/');
const logger = buildlloger('app.js');

logger.log('hola mundo');
logger.error('ESTO ES UN ERROR');