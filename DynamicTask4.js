const posts=[
    {title: 'post1', body: 'this is post 1',createAt:new Date().getTime()},
    {title: 'post2', body: 'this is post 2',createAt:new Date().getTime()}
];
let intervalid=0;
function getPosts(){
    clearInterval(intervalid);
    setInterval(()=>{
     let output='';
     posts.forEach((post) => {
  output +=`<li>${post.title} - created ${Math.floor((new Date().getTime()-post.createAt)/1000)} seconds ago</li>` ;       
     });
     document.body.innerHTML=output;
    },1000)
    }
function createPost(post,callBack){
    setTimeout(()=>{
        posts.push({...post, createAt:new Date().getTime()})
        callBack();
    },2000);
}

function create4thPost(post,callback){
    setTimeout(()=>{
    posts.push({...post, createAt:new Date().getTime()});
    callback();
    },3000)
}

var timer;
var count=0;
function lastEditedInSecondsAgo(){
count=0;
clearInterval(timer)
timer=setInterval(()=>{
    count++;
    console.log(count);
},5000)
}
createPost({title: 'Post3', body:'this is post 3'}, getPosts);
create4thPost({title:'post4', body:'this is post4'}, getPosts);
lastEditedInSecondsAgo()