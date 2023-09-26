const { time } = require("console");

// rendiminetos
console.time("Todo");
let suma =0;

console.time("bucle");
for (let i = 0; i < 10000000; i++) {
    suma += 1
}
console.timeEnd("bucle");

let suma2 =0;

console.time("bucle 2");
for (let i = 0; i < 100000000; i++) {
    suma += 1
}
console.timeEnd("bucle 2");
console.time('asincrono')
console.log('Comienza proceso Asincrono');
asincrono()
    .then(() => {
        console.timeEnd('asincrono')
    });
function asincrono() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('Termino el proceso.');
            resolve();
        })
    })
}
console.timeEnd("Todo");