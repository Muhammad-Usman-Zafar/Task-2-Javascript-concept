// const promise = new Promise((resolve, reject)=>{
//     console.log("Task is executed...");
//     if(false){
//         resolve();
//     }else{
//         reject();
//     }
// });

// promise.then(()=>{
//     console.log("Promise is Fulfilled.. :) ");
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finished...");
// });




// const promise1 = new Promise((resolve, reject)=>{
//     console.log("Task is executed...");
//     if(false){
//         const person = {name: "Usman"}
//         resolve(person);
//     }else{
//         const error = {err: "10001"}
//         reject(error);
//     }
// });

// promise1.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finished...");
// });


// const promise2 = Promise.resolve("done");

// promise2.then((val)=>{
//     console.log(val);
//     return "done2"
// }).then((val) => {
//     console.log(val);
// })

const makeApi = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Api Executed: " + time);
        }, time);
    })
}

let multiApi = [makeApi(1000), makeApi(5000), makeApi(500)]

// Promise.all(multiApi).then((value)=> {
//     console.log(value);
// })

Promise.race(multiApi).then((value)=> {
    console.log(value);
})