const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//get user input
const address = process.argv[2];
// console.log('input', address);

if (!address) {
  console.log('Please input city');
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    //if some when wrong with geocode
    if (error) {
      return console.log('opps geocode error', error);
    }
    forecast(latitude, longitude, (error, { forecast }) => {
      //if some when wrong with forecast
      if (error) {
        return console.log('opps forecast error', error);
      }
      console.log(location);
      console.log(forecast);
    });
  });
}

//geocoding

// dark sky weather
// https://darksky.net
// https://darksky.net/dev/account
// Name: psthree@aol.com
// Pass: obobob$1
// secret key: 570dfb6f59de5ba39c823b8873c2d2ee

//mapbox
// username psthree
// email: psthree@Aol.com
// password: bobobobo

//token: pk.eyJ1IjoicHN0aHJlZSIsImEiOiJjanVsZHIxOHcyNXA2NDRwamhtOWZveXc1In0.rRCB6oto1d-617XTMNCY_w

//https://api.mapbox.com/geocoding/v5/mapbox.places/Hazel%20park.json?access_token=pk.eyJ1IjoicHN0aHJlZSIsImEiOiJjanVsZHIxOHcyNXA2NDRwamhtOWZveXc1In0.rRCB6oto1d-617XTMNCY_w&limit=1
