// requires

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log("================================".green);
    console.log(`========Tabla de ${base}========`.green);
    console.log("================================".green);
    for (let index = 1; index <= limite; index++) {

        console.log(`${ base } * ${ index } = ${ base }* index`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido $ { base }
                    no es un número `);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {

            data += `$ { base } * $ { index } = $ { base * index }\n `;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}