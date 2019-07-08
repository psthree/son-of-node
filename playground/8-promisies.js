// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1, 2, 7])
//         reject('Opps error')
//     }, 2000)
// })

//then only runs for resolve
// doWorkPromise.then((result) => {
//     console.log('Success', result)
// }).catch((error) => {
//     console.log('Opps error man', error)
// })

//
//                               fulfilled
//                              /
// Promise      -- pending --> 
//                              \
//                               rejected
//

//promise chaining

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}
// add(10, 20).then((sum) => {
//     console.log('Success', sum)

//     //to call again
//     add(sum, 20).then((sum2) => {
//         console.log('Success', sum2)
//     }).catch((error) => {
//         console.log('Error', error);
//     })
// }).catch((error) => {
//     console.log('Error', error);
// })

add(1, 2).then((sum) => {
    console.log('Sum ', sum);
    return add(sum, 10);
}).then((sum2) => {
    console.log('Sum2', sum2)
}).catch((error) => {
    console.log('Error', error);
})