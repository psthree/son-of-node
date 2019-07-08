require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d0a52fad5f7b6030957faf8').then((task) => {
//     console.log(task);
//     return Task.countDocuments({
//         completed: false
//     });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log('Error', error);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({});
    return count
}

deleteTaskAndCount('5d0a51b5b557ea02ece925bf').then((count) => {
    console.log("Count", count)
}).catch((error) => {
    console.log("Error :", error);
})