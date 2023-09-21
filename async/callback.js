// function soyAsincrona(miCallBack){
//     // console.log('Hola, SOy una función asínrona');
//     setTimeout(function() {
//         console.log('Estoy siendo asincrono');
//         miCallBack();
//     }, 1000);
// }
// console.log('Iniciando proceso');
// soyAsincrona(function() {
//     console.log('terminado proceso');
// });

function hola(nombre, miCallback){
    // console.log('Hola, SOy una función asínrona');
    setTimeout(function() {
        console.log('Hola', nombre);
        miCallback(nombre);
    }, 3000);
}
function adios(nombre, otroClaback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroClaback
    }, 1000);
}
console.log('Iniciando proceso');
hola('Diana', function(nombre) {
    adios(nombre, function () {
        console.log('terminado proceso');
    });
});
