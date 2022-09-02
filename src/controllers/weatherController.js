const axios = require("axios");
const lodash = require("lodash")


const londonWeather = async function (req, res) {
    try {
        let city = req.query.city;
        let appId = req.query.appId;
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
        }
        let weatherData = await axios(options);
        return res.status(200).send({ msg: weatherData.data.main["temp"] })
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ msg: error.message })
    }
}

const citiesWeather = async function (req, res) {

    let appId = req.query.appId;
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
    let result = [];
    for (let i = 0; i < cities.length; i++) {
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appId}`
        }
        let weather = await axios(options);

        let obj = {};
        obj.city = weather.data.name;
        obj.temp = weather.data.main["temp"]
        result.push(obj);
    }
    result.sort((x, y) => x.temp - y.temp);
    return res.status(200).send({ msg: result })
}






module.exports.londonWeather = londonWeather;
module.exports.citiesWeather = citiesWeather;