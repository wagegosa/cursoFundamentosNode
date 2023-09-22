
console.log('algo');
console.info('Algo');
console.error('Error algo');
console.warn('warn algo');

var prueba = [
    {
        a: "Luis",
        b: "Lora",
        c: 22
    },
    {
        a: "Agustín",
        b: "Morán",
        c: 19
    }
];
const usuario = [
    {
        nombre: "Luis",
        apellido: "Lora",
        edad: 22
    },
    {
        nombre: "Agustín",
        apellido: "Morán",
        edad: 19
    }
];
const people = [
    ["Tyrone", "Jones"],
    ["Janet", "Smith"],
    ["Maria", "Cruz"],
];
console.group('Prueba de group')
console.log('Log tabla: ', prueba);
console.table(prueba);
console.group('externas')
console.table(["apples", "oranges", "bananas"]);
console.table(people);
console.groupEnd('externas')
console.groupEnd('Prueba de group')
console.table(usuario);

function funcion1() {
    console.group('Funcion 1');
    console.log('Esto es de la función 1');
    console.log('Esto igual');
    console.log('Esto igual');
    funcion2();
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('Funcion 2');
    console.log('Esto es de la función 2');
    console.groupEnd('funcion 2');
}

console.log('empenzamos');
funcion1();
