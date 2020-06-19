const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// const fs = require('express');
// const fs = require('./archivo');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('commando no reconocido');
        break;
}
// let argv2 = process.argv;
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];