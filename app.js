const clima = require('./controlador/clima');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la Ciudad para obtener el Clima.',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad;
//
clima.getClima(ciudad)
    .then(respuesta => {
        console.log(`La temperatura en ${ciudad} es de ${respuesta} °C`);
    }).catch(err => {
        console.log(err);
    })