const readline = require('readline');
const userLogin = ()=>{

    const name = process.argv[2];
    const pass = process.argv[3]

    let username = prompt("enter username ");
    let password = prompt("Enter Password ")
    
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Performing user Authentication");
            if (username === "kml" && password === "kml"){
                resolve("User Authenticated")
            }else{
                reject("!User Authenticated")
            }
        },1000);
        });
}

function goToHome(params) {
    return new Promise.resolve(`Go to home Page ${params}`)
}

// userLogin()
// .then((response)=>{
//     console.log("User Authenticated");
//     return goToHome(response);
// }).then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.log(err);
// })

async function task() {
    try {
        const response = await userLogin();
        console.log("Validated User");
        const userAuth = await goToHome(response)
        console.log(userAuth);
    } catch (error) {
        console.log(error);
    }
}