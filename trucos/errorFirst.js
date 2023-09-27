function asincrina(callBack) {
    setTimeout(() => {
        try {
            let a =3 + z;
            callBack(null, a);
        } catch (e) {
            callBack(e)
        }
    }, 1000);
}

asincrina((err, dato) => {
    if (err) {
        console.error('Se presento un error, es el siguiente:', err);
        // throw err; no va a funcionar en las funciones asincronas
        return false;
    } else {
        console.log('Vamos bien, mi data es: ', dato);
    }
})