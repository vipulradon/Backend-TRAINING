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
       let a= cities.forEach(async function(x){return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${appId}`)})

        return res.status(200).send({ msg: a })
}
   





module.exports.londonWeather = londonWeather;
module.exports.citiesWeather = citiesWeather;