let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("checking user credentials")
        //resolve({username:"a@mail.com"})
        reject("error)")
    }, 5000)
})
promise.then(data => {
    console.log("data")
}).catch(error => {
    console.log("error")
})



