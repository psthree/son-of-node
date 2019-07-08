// setTimeout(() => {
//   console.log('time out fired');
// }, 1000);

// const names = ['Peter', 'Dave', 'Joe'];
// const shortName = names.filter(name => {
//   return name.length <= 4;
// });

// console.log(shortName);
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0
//     };
//     callback(data);
//   }, 3000);
// };

// const data = geocode('Detroit', data => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined)
    callback(undefined, [1, 2, 7])
  }, 2000)
}

//function gets fired on return with result
doWorkCallback((error, result) => {
  if (error) {
    return console.log('opps error', error);
  }
  console.log('Result', result);
})