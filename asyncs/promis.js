function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("checking user credentials")
            resolve({ username: email })
           // reject("error")
        }, 5000)
    })
}
function getUserinfo(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([email, "123", "fgfg"])
        }, 1000);
    })
}
loginUser("a1@gmail.com", 123).then(user=>getUserinfo(user.username)).
catch(error=>{
   console.log("error")
}).
then(userdat=>console.log(userdat))
 

//const user=loginUser("a@gmail.com",123)
//const userdata=getUserinfo(user.username)
//user.then(data=>{
 //   console.log(data)
//}).catch(error=>{
//console.log("error caught")
//})
//console.log("end")
//userdata.then(dat=>{
 //   console.log("inside userdata fetch")
 //   console.log(dat)
//})
