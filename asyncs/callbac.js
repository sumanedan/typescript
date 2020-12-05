const posts=[
    {
        "title":"this is my first blog",
        "body":"My first blog"
    },
    {
        "title":"this is my second blog",
        "body":"My second blog"
    }
]
function getPosts(){
    console.log("inside getpost"+new Date())
    setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(post.title)
            console.log(post.body)

        })
    },1000)
}
//getPosts();
function createPost(post,callback){
    console.log("inside createpost"+new Date())
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000);
}
createPost({"title":"this is my third blog","body":"My third blog"},getPosts)