const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        if (!data) {
            console.error('No se encontro el archivo');
        } else {
            console.log(data);
            // para poder leerlo como un String se le indica los siguiente:
            cb(data.toString());
        }
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('Lo sentimos en se ha podido realizar su solicitud. ', err);
        }else{
            console.log('Se ha procesado correctamente.');
        }
    })
}

function borrar(ruta, cb) {
    if (ruta) {
        fs.unlink(ruta, cb);
    } else {
        console.error(' no se encontro el archivo o ruta');
    }fs.unlink(ruta, cb);
}

// leer(__dirname + '/archivo.txt', console.log)
// escribir(__dirname + '/archivo.txt', 'Soy un texto nuevo.', console.log);
borrar(__dirname + '/archivo.txt', console.log)