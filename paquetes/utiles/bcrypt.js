const bcrypt = require('bcrypt');
const password = '12345Justo!';

// Vamos a encriptar la clave anterior
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    // Para compara que esto si se el password
    bcrypt.compare(password, hash, (err, res) => {
        // console.log(err);
        console.log(res);
    })
})