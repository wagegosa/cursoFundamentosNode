// para manejar buffer

const { buffer } = require("stream/consumers")

// let buffer = Buffer.alloc(5);
// console.log(buffer);

// let buffer = Buffer.from( [1, 22, 3] );
// console.log(buffer);

// let buffer = Buffer.from('Hola mundo');
// console.log(buffer);
// console.log(buffer.toString());

// Recorrer un buffer
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
    abc[i]= i + 97;
}
console.log('Ya con el abc: ', abc);
console.log('Ya con el abc string: ', abc.toString());