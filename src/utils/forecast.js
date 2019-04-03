const request = require('request')

const forecast = function (latitude, longitude, callback) {
  const url = 'https://api.darksky.net/forecast/8d5a08ebd4ae9fdbd90a4cdb41c6dafc/' + latitude + ',' + longitude
  request({
    url,
    json: true}, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service.")
    } else if (body.error) {
      callback('Unable to find location.') 
    } else {
      const temp = body.currently.temperature
      const precip = body.currently.precipProbability
      const uv = body.currently.uvIndex
      callback(null, body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out with a ' + precip + '% chance of rain. The uv index is ' + uv)
    }
  })
}

module.exports = forecast
