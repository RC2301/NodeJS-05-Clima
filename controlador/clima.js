const axios = require('axios');
const colors = require('colors');

const apikey = 'd4507d2b31aaabb2421d43fce6ad8e50'

const getClima = async(ciudad) => {
    try {
        let ciudadURI = encodeURI(ciudad)
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apikey}&units=metric`
        const respuesta = await axios.get(url);
        return lon = respuesta.data.coord.lon,
            lat = respuesta.data.coord.lat,
            main = respuesta.data.weather[0].main,
            description = respuesta.data.weather[0].description,
            temp = respuesta.data.main.temp,
            feels_like = respuesta.data.main.feels_like,
            temp_min = respuesta.data.main.temp_min,
            temp_max = respuesta.data.main.temp_max,
            pressure = respuesta.data.main.pressure,
            humidity = respuesta.data.main.humidity,
            speed = respuesta.data.wind.speed,
            deg = respuesta.data.wind.deg,
            all = respuesta.data.clouds.all,
            idp = respuesta.data.sys.id,
            country = respuesta.data.sys.country,
            timezone = respuesta.data.timezone,
            idc = respuesta.data.id,
            cod = respuesta.data.cod,
            name = respuesta.data.name;
    } catch (error) {
        // handle error
        console.log("---------------ERROR---------------\n".white.bgRed, `\n${error.data}\n`.black.bgYellow);
    };

    // let ciudad = argv.ciudad;
    // console.log(ciudad);
}
module.exports = {
    getClima
}