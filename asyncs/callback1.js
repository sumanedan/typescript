function loginUser(email,password,callback){
setTimeout(() => {
    console.log("checking user credentials")
    
  callback({username:email}) 
}, 5000)
}
loginUser("a1@gmail.com",123,(user)=>{
    console.log(user)
    getUserinfo(user.username,info=>{
        console.log(info)
    })
})

function getUserinfo(email,callback){
setTimeout(() => {
 callback(["email","123","fgfg"])
}, 1000);
}


