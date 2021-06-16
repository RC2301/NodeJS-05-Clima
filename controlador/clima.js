const axios = require('axios');

const apikey = 'd4507d2b31aaabb2421d43fce6ad8e50'

const getClima = async(ciudad) => {
    try {
        let ciudadURI = encodeURI(ciudad)
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudadURI}&appid=${apikey}&units=metric`
        const respuesta = await axios.get(url);
        return respuesta.data.main.temp;
    } catch (error) {
        // handle error
        console.log("---------------ERROR---------------\n", error.data);
    };

    // let ciudad = argv.ciudad;
    // console.log(ciudad);
}
module.exports = {
    getClima
}