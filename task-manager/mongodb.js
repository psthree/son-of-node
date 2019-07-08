// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
//or destructor

const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
//picking this name and connecting to Mongo automatically creates the database
const databaseName = 'task-manager';
// To generate our own IDs instead of using mongo default ids
// The Id genderated by Using ObjectID contains a time stamp
// ObjectID has a method to get that time stamp, getTimestamp()
// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionUrl,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database', error);
    }
    //console.log('Yeah man we are connnected');
    const db = client.db(databaseName);

    //deleteOne deleteMany
    db.collection('tasks')
      .deleteOne({
        description: 'Taxes'
      })
      .then(result => {
        console.log('result count: ', result.deletedCount);
      })
      .catch(error => {
        console.log('Error: ', error);
      });

    // db.collection('users')
    //   .deleteMany({
    //     age: 27
    //   })
    //   .then(result => {
    //     console.log('Success! ', result);
    //   })
    //   .catch(error => {
    //     console.log('Error', error);
    //   });

    //updates (updateOne, updateMany)
    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log('Result', result);
    //     console.log('Result count', result.modifiedCount);
    //   })
    //   .catch(error => {
    //     console.log('error'.error);
    //   });

    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('5cf2a2dcdbf5ea030f59bcba')
    //     },
    //     {
    //       // $set: {
    //       //   name: 'Stema'
    //       // }
    //       //increments
    //       $inc: {
    //         age: 1
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log('Success', result);
    //   })
    //   .catch(error => {
    //     console.log('Error', error);
    //   });

    // db.collection('users').findOne(
    //   {
    //     // name: 'David'
    //     _id: new ObjectID('5cf1483f015b590342c2cec2')
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Error fetching Name');
    //     }
    //     console.log('Name fetched', user);
    //   }
    // );

    // find returns a CURSOR
    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log('Error fetching task');
    //     }
    //     console.log(tasks);
    //   });

    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('5cf3efb87d6c0702d12b9509') },
    //   (error, ourName) => {
    //     if (error) {
    //       return console.log('Error fetching task');
    //     }
    //     console.log('last:', ourName);
    //   }
    // );

    // db.collection('users').insertOne(
    //   {
    //     name: 'Andrew',
    //     age: 27
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('error inserting record');
    //     }
    //     console.log('Success', result.ops);
    //   }
    // );
    // db.collection('users').insertMany([{
    //         name: 'David',
    //         age: 58
    //     },
    //     {
    //         name: 'Joe',
    //         age: 55
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('There was an error inserting records')
    //     }
    //     console.log('Success ', result.ops)
    // })

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Play guitar',
    //       completed: true
    //     },
    //     {
    //       description: 'Garden',
    //       completed: false
    //     },
    //     {
    //       description: 'Taxes',
    //       completed: true
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('There was an error inserting');
    //     }
    //     console.log('Success ', result.ops);
    //   }
    // );
  }
);

// node mongodb.js
// cd /Users/peterstema/mongodb/bin
// /Users/peterstema/mongodb/bin/mongod --dbpath=/Users/peterstema/mongodb-data
