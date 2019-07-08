//object property shorthand

const name = 'Peter';
const userAge = 60;
const user = {
  name,
  age: userAge,
  location: 'Detroit'
};

console.log(user);

//object destructuring
const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;
const { label: newName, stock, rating = 5, test } = product;
// console.log(newName, stock);
// console.log(rating, test);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
