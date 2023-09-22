async function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola', nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla...');
            resolve(nombre);
        }, 1000)
    })
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve(nombre);
            // reject('Error 111')
        }, 1000);
    })
}

// ---

async function main() {
    let nombre = await hola('German');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso');
}

console.log('Inicia el proceso');
main();