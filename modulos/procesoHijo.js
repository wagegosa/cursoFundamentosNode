const { exec, spawn } = require('child_process');
const { stdout } = require('process');

// // exec('dir', (err, stdout, sterr) => {
// exec('node modulos/consola', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false
//     }
//     console.log(stdout);
// })
let proceso = spawn('cmd', ['/c', 'dir']); 

console.log(proceso.pid);
console.log(proceso.connected);
proceso.stdout.on('data', (dato) => {
    console.log('¿Esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
})
proceso.on('exit', () => {
    console.log('El proceso ha terminado.');
    console.log('revisamos si el proceso ha muerto', process.killed);
})