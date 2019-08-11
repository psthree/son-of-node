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

//testing file upload
// const multer = require('multer');
// const upload = multer({
//   dest: 'images'
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send();
// });

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
