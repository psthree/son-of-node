const fs = require ('fs');

// const book = {
//     title: 'use it',
//     author: 'David Smith'
// }

// const bookJSON = JSON.stringify(book)
// //name of file, data to write
// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataString = dataBuffer.toString();
// const data = JSON.parse(dataString);
// console.log(dataBuffer.toString());
// console.log(dataString);
// console.log('data', data)
// console.log(data.title);

//read file
const dataRead = fs.readFileSync('data.json');
//convert to string
const dataReadString = dataRead.toString(); 
// convert string to json
const dataJSON = JSON.parse(dataReadString);
console.log(dataJSON);
dataJSON.name = 'Peter';
dataJSON.age = '60';
console.log(dataJSON);
console.log(JSON.stringify(dataJSON));
writeJSON = JSON.stringify(dataJSON);
console.log('test', writeJSON);
fs.writeFileSync('data.json',writeJSON);




//{"name":"Andrew","planet":"Earth","age":27}