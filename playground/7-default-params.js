// value after = in argument is the default value
const greeter = (name = 'USER', age = 50) => {
  console.log('Hello', name, age);
};

greeter('Peter', 19);
greeter();
