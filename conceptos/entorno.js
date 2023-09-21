// let saludo = 'Pedro';
// console.log('Hola ', saludo);

// Para realizar con una variable de entorno hacemos lo sigguiente:
let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo';
let celular = process.env.CELULAR || 'no tengo';

console.log('Hola ', nombre);
console.log('Mi web es: ', web);
console.log('Mi celular es: ', celular);
// Cuando se ejecuta va a mostrar que esta undefiendd. 
// En cambio si la ejecutamos de l sigiente manera. se vera asi:
// NOMBRE:"Alejandro" MI_WEB"123QWERTY" APIKEY=10937472 node conceptos/entorno.js >