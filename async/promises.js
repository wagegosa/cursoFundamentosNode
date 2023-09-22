function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
        }, 1000)
    })
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            // resolve(nombre);
            reject('Error 111')
        }, 1000);
    })
}

// ---

console.log('Iniciado el proceso...');
hola('Carlos')
    .then(adios)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Habido un error');
        console.error(error);
    })