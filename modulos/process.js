// const process = require('process');

// process.on('beforeExit', () => {
//     console.log('Ojo, proceso va terminar');
// });

// process.on('exit', () => {
//     console.log('Ojo, proceso terminado');
// });

process.on('exit', () => {
    console.log('Ojo, proceso terminado');
    setTimeout(() => {
        console.log('Esto nuca se va a ver');
    }, 1000);
});

// setTimeOut(() => {
//     console.log('Esto si se va aver')
// }, 0);

process.on('uncaughtException', (err, origen) => {
        console.error('Ojo, se nos ha olvidado capturar un error');
        console.error(err)
        setTimeout(() => {
            console.log('Esto Viene desde las excepciones');
        }, 1000);
});

// process.on('uncaughRejection', () => {
//     console.log('Ojo, promesa rechazada');
// })

funcionNoExiste();
consoloe.log('Esto si el error no se recoje, no sale');
