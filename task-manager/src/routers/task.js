const express = require('express');
const Task = require('../models/task')
const router = new express.Router();


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    //console.log(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send(error);
    }

    // res.send('Testing');
    // task
    //   .save()
    //   .then(() => {
    //     res.status(201).send(task);
    //   })
    //   .catch(error => {
    //     res.status(400);
    //     res.send(error);
    //   });
});

router.get('/tasks', async (req, res) => {
    //empty object finds all (attributes limit what is returned)

    try {
        const task = await Task.find({});
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
    // Task.find({})
    //   .then(task => {
    //     res.send(task);
    //   })
    //   .catch(error => {
    //     res.status(500).send(error);
    //   });
});

router.get('/tasks/:id', async (req, res) => {
    // console.log(req.params);
    const _id = req.params.id;
    //console.log(_id);
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.statusCode(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }

    // Task.findById(_id)
    //   .then(task => {
    //     // what? no task returned
    //     if (!task) {
    //       return res.statusCode(404).send();
    //     }
    //     res.send(task);
    //   })
    //   .catch(error => {
    //     res.status(500).send();
    //   });
});

router.patch('/tasks/:id', async (req, res) => {
    const update = req.body;

    //only fields user can update
    const allowedUpdates = ['completed', 'description'];
    const updates = Object.keys(req.body);
    // returns false if ANY do not match
    const isValidUpdate = updates.every(update => {
        //returns true if it match's
        return allowedUpdates.includes(update);
    });

    //if there is a inValidate field send user an error
    if (!isValidUpdate) {
        return res.status(400).send('Error: you send invalid update data');
    }

    try {
        // findByIdAndUpdate(what to update, data to update, options
        // (new returns update user instead of found user))
        const task = await Task.findById(req.params.id);
        updates.forEach(update => (task[update] = req.body[update]));
        await task.save();

        // const task = await Task.findByIdAndUpdate(_id, update, {
        //     new: true,
        //     runValidators: true
        // });

        //if mongo connects but does not find the task
        if (!task) {
            return res.status(404).send();
        }
        //default status is 200 no need to set
        res.send(task);
    } catch (error) {
        //this is if validation fails
        res.status(400).send(error);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(_id)
        //if task no found
        if (!task) {
            return res.status(404).send('No task with that ID found');
        }
        //default status is 200 no need to set
        res.send(task);

    } catch (error) {
        res.status(500).send(error);
    }

})

module.exports = router;