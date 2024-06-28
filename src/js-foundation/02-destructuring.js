


// console.log(process.env);


// DESTRUCTURACION DE OBJETOS
const  {SHELL, SHLVL,SESSIONNAME} = process.env;

// console.table({SHELL,SHLVL,SESSIONNAME});



const characters = ['flash', 'batman', 'superman'];
// Esas comas se llama destructuracion
const [ , ,superman] = characters;

// console.log(superman);