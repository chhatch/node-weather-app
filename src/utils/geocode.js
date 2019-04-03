const request = require('request')

const geocode = function (address, callback) {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG9ja21vciIsImEiOiJjanRycGduY2Qwc2tlM3ptc2txejVucGo4In0.nRWysS9p7bmF2yldi_nr8Q' 
  request({
    url,
    json: true}, (error, {body}) => {
    if (error) {
      callback("Unable to connect to geocoding service.")
    } else if (body.features.length === 0) {
      callback('Matching location not found.')
    } else {
      callback(null, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
