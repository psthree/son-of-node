const mongoose = require('mongoose');
// const validator = require('validator');

//task model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //a referance to the User data
    }
});

module.exports = Task;