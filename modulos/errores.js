function otraFuncion() {
    seronpe()
}
function seronpe() {
    return 3 + Z;
}
function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en la función seRompeAsincrona.');
            cb(err)
        }
    }, 1000);
}

try {
    // otraFuncion();
    seRompeAsincrona((err) => {
        console.log('Hay error y es este: ', err.message);
    })
} catch (error) {
    console.error('fallo, algo se daño,', error);
    console.error('Mensaje de error: ', error.message);
}
console.log('Esto de aca es el final');