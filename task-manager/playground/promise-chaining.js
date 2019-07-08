require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5d0279500be79504b1689f33', {
//     age: 1,
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({
//         age: 1
//     });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log('Error', error);
// })

// ASYNC AWAIT version

// User.findByIdAndUpdate('5d0279500be79504b1689f33', {
//     age: 1,
// }).then((user) => {
//     console.log(user);
//     return User.countDocuments({
//         age: 1
//     });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log('Error', error);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age: age
    });
    const count = await User.countDocuments({
        age: age
    })
    return count;
}

updateAgeAndCount('5d0279500be79504b1689f33', 10).then((result) => {
    console.log('Result', result);

}).catch((error) => {
    console.log("Error", error)
});