const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //number must be positive
      if (a < 0 || b < 0) {
        reject('Numbers must be positive');
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  //add returns a promise
  const sum = await add(10, 5);
  const sum2 = await add(sum, 25);
  const sum3 = await add(sum2, -5);
  return sum3;
};

doWork()
  .then(result => {
    console.log('Result', result);
  })
  .catch(error => {
    console.log('Error', error);
  });
