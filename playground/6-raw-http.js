//http is the same but use that instead of https
const https = require('https');

const url =
  'https://api.darksky.net/forecast/570dfb6f59de5ba39c823b8873c2d2ee/42.462,-83.1036?units=us';

const request = https.request(url, response => {
  //response can stream back so you have to listen for it
  //store the chucks as them come down
  let data = '';
  response.on('data', chunk => {
    data += chunk.toString();
    //console.log('chunk', chunk);
  });

  response.on('end', () => {
    //console.log('data', data);

    const body = JSON.parse(data);
    console.log(body);
  });
});

//handle errors
request.on('error', error => {
  console.log('An error', error);
});

request.end();
