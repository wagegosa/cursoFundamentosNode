const { log } = require('console');
const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, ¿Como estas?')
            res.end();
            break;
        case '/test':
            res.write('Hola ya se usar HTTP de Node');
            res.end();
            break;
        default:
            console.log(req.url);
            res.write('Error 404: no se lo que quieres');
            res.end();
            break;
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain'});
    // res.write('Hola ya se usar HTTP de Node');

    // res.end();
}
console.log('Escuchamos el puerto 3000');