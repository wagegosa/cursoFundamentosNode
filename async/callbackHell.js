function hola(nombre, miCallback){
    // console.log('Hola, SOy una función asínrona');
    setTimeout(function() {
        console.log('Hola', nombre);
        miCallback(nombre);
    }, 2000);
}
function adios(nombre, otroClaback) {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroClaback();
    }, 1000);
}
function hablar(callBackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla...');
        callBackHablar();
    }, 1000)
}
function conversación(nombre,veces, callBack){
    if (veces >0) {
        hablar(function () {
            conversación(nombre, --veces, callBack);
        })
    } else {
        adios(nombre, callBack)
    }
}

// --

console.log('Iniciando proceso');
hola('Diana', function(nombre) {
    conversación(nombre, 3, function () {
        console.log('Terminando proceso');
    })
});

// hola('Diana', function(nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('terminado proceso');
//                 });
//             });
//         });
//     })
// });