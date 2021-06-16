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
            console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".black.bgMagenta);
            console.log();
            console.log("*\///\///\///\///\///\///\* Weather-RC *\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*".black.bgCyan);
            console.log();
            console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-".black.bgMagenta);
            console.log();
            console.log("========== COORDENADAS ==========".black.bgWhite);
            console.log();
            console.log(`Longitud: ${lon}`.black.bgGreen);
            console.log(`Latitud: ${lat}`.black.bgGreen);
            console.log();
            console.log("========== CLIMA ==========".black.bgWhite);
            console.log();
            console.log(`Principal: ${main}`.black.bgGreen);
            console.log(`Descripción: ${description}`.black.bgGreen);
            console.log();
            console.log("========== DATOS PRINCIPALES ==========".black.bgWhite);
            console.log();
            console.log(`Temperatura: ${temp}°`.black.bgGreen);
            if (temp <= 12) {
                console.log('La Clima esta Frio'.white.bgBlue);
            } else if (temp > 12 && temp <= 22) {
                console.log('La Clima esta Normalito'.black.bgYellow);
            } else if (temp > 22) {
                console.log('La Clima esta Caliente'.white.bgRed);
            }
            console.log(`La Temperatura se siente como: ${feels_like}°`.black.bgGreen);
            console.log(`Temperatura Minima: ${temp_min}°`.black.bgGreen);
            console.log(`Temperatura Maxima: ${temp_max}°`.black.bgGreen);
            console.log(`Presión: ${pressure} hPa`.black.bgGreen);
            console.log(`Humedad: ${humidity}%`.black.bgGreen);
            console.log();
            console.log("========== VIENTO ==========".black.bgWhite);
            console.log();
            console.log(`Velocidad: ${speed} m/s`.black.bgGreen);
            console.log(`Grados: ${deg}°`.black.bgGreen);
            console.log();
            console.log("========== NUBES ==========".black.bgWhite);
            console.log();
            console.log(`Abundancia de Nubes en un: ${deg}%`.black.bgGreen);
            console.log();
            console.log("========== DATOS PAIS ==========".black.bgWhite);
            console.log();
            console.log(`Id del Pais: ${idp}`.black.bgGreen);
            console.log(`Pais: ${country}`.black.bgGreen);
            console.log();
            console.log("========== DATOS CIUDAD ==========".black.bgWhite);
            console.log();
            console.log(`Zona Horaria: ${timezone}`.black.bgGreen);
            console.log(`Id de la Ciudad: ${idc}`.black.bgGreen);
            console.log(`Ciudad: ${name}`.black.bgGreen);
            console.log(`Código: ${cod}`.black.bgGreen);
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