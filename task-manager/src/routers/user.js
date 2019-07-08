const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
  // console.log(req.body);
  // res.send('Testing');
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }

  await user.save();
  // user
  //   .save()
  //   .then(() => {
  //     // console.log(Success!);
  //     res.status(201).send(user);
  //   })
  //   .catch(error => {
  //     res.status(400);
  //     res.send(error);
  //     //same res.status(400).send(error);
  //   });
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}); //empty object finds all
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
  //empty object finds all
  // User.find({})
  //   .then(users => {
  //     res.send(users);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   });
});

//find specific user
router.get('/users/:id', async (req, res) => {
  //console.log(req.params);
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    //if mongo connects but does not find a user
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }

  // User.findById(_id)
  //   .then(user => {
  //     //if mongo connects but does not find a user
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   });
});

//update a user
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const user = await User.findById(req.params.id);

    updates.forEach(update => (user[update] = req.body[update]));
    await user.save();

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(_id);

    //if user not found
    if (!user) {
      return res.status(404).send('No user with that ID found');
    }
    //default status is 200 no need to set
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
