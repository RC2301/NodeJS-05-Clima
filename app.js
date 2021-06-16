const clima = require('./controlador/clima');
const colors = require('colors');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la Ciudad para obtener el Clima.',
        demand: true
    }
}).argv;

let ciudad = argv.ciudad;

clima.getClima(ciudad)
    .then(respuesta => {
        if (respuesta == undefined) {
            console.log("No existe ningun tipo de informacion".white.bgRed);
        } else {
            console.log(`La temperatura en ${ciudad} es de ${idc} °C`);
        }

    }).catch(err => {
        console.log(err);
    })

/*
1.- Modificar el codigo para obtener errores coherentes
2.- Mostrar el resto de parametros del clima
   2.1 Utilizar colores
3.- Subir a Github   
*/