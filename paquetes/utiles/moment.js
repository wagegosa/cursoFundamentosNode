// Para trabajar con fechas
const moment = require('moment');
// para la fecha de hoy
let ahora = moment();
console.log('Sin fromato', ahora.toString());
// Para ver formato 'YYY/MM/DD - HH:MM'
console.log('Con formato', ahora.format('YYY/MM/DD - HH:MM'));