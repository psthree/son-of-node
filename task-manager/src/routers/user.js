const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

// signing up
router.post('/users', async (req, res) => {
  // console.log(req.body);
  // res.send('Testing');
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      user,
      token
    });
  } catch (error) {
    res.status(400).send(error);
  }
  await user.save();
});

// logging in
// find user by email and password
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({
      user,
      token
    });
  } catch (error) {
    res.status(400).send('Cannot login');
  }
});

//logging out
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      // returns true when its NOT the one we are looking for
      // if its false it gets removed
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    console.log('logout error');
    res.status(500).send();
  }
});

// only runs if user is authenticated
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
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
});

//update a user
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({
      error: 'Invalid updates!'
    });
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
