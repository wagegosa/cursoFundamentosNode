function hola(nombre, miCallback){
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