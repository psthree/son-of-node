const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.POST || 3000;

//runs before routing to check auth
// app.use((req, res, next) => {
//   //console.log(req.method, req.path);
//   if (req.method === 'GET') {
//     res.send('Cannot use GET');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Maintenance Mode');
// });

//express please parse the incoming object to an object that is easy for us to use
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up an on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');
const main = async () => {
  //gets task and adds user info
  // const task = await Task.findById('5d41bee1a50a21034b074d5d');
  // // adds User(owner) info task.owner
  // await task.populate('owner').execPopulate();
  // console.log('TASK: ', task);
  //gets task by user 5d4067bb37636e02fd7eeb9d xxx
  const user = await User.findById('5d4067bb37636e02fd7eeb9d');
  await user.populate('tasks').execPopulate();
  console.log(user.tasks);
};
main();

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//   //returns new token
//   const token = jwt.sign({ _id: '123abc' }, 'thisissecret', {
//     expiresIn: '10 seconds'
//   });
//   console.log(token);

//   const data = jwt.verify(token, 'thisissecret');
//   console.log(data);
// };

// myFunction();

//const bcrypt = require('bcryptjs');
// const myFunction = async () => {
//   //what user entered
//   const password = 'red12345';
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(`org password ${password}, hash ${hashedPassword}`);
//when the password to check is ran though bcrypt it should match the one in the database
//   const isMatch = bcrypt.compare('red12345', hashedPassword);
//   console.log('isMatch :', isMatch)
// }

// cd /Users/peterstema/Documents/repos/node\ 3/site/task-manager/src
// node index.js
// npm run dev

// cd /Users/peterstema/mongodb/bin
// /Users/peterstema/mongodb/bin/mongod --dbpath=/Users/peterstema/mongodb-data

// {
// 	"name": "Peter Seven",
// 	"email": "8test@test1.com",
// 	"password": "12341234"
// }
