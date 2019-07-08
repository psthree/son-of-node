// const square = function(x) {
//   return x * x;
// };

// const square = x => {
//   return x * x;
// };

// console.log(square(3));

const event = {
  name: 'Big concert',
  printGuestList: function() {
    console.log('Guest list for ' + this.name);
  }
};

event.printGuestList();
