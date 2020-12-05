function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("checking user credentials")
            resolve({ username: email })
            //reject("error")
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
async function displayUser() {
    try {
        const user = await loginUser("a@gmail.com", 12345)
        const userinfo = await getUserinfo(user.username)
        console.log(userinfo)
    } catch (error) {
        console.log("error occured")
    }
}
displayUser();