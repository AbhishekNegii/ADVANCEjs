const posts=[
    {title: 'post1', body: 'this is post 1',createAt:new Date().getTime()},
    {title: 'post2', body: 'this is post 2',createAt:new Date().getTime()}
];

function getPost(){
            let output='';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`;
        })
            document.body.innerHTML=output;
        
    }


function createPost(post){
    return new Promise((resolve,reject) =>{
        posts.push(post);
        const error=false;
        if(!error)
        {
            resolve();
        }
        else{
            reject('err:Something went wrong')
        }
    },1000)
}

createPost({title:'post3', body:'this is post 3'})
.then(getPost)
.catch(err=>console.log(err))


function delpost(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      if(posts.length>0)
      {
        posts.pop();
        resolve();
      }
      else{     
        reject('err :Array is empty');
      }
     },1000)
    })
}
delpost().then(delpost).catch(err=> console.log(err))


// const p1=Promise.resolve('Hello World');
// const p2= 10;
// const p3=new Promise((resolve,reject)=> 
// setTimeout(resolve,2000,'Good Bye'));
// Promise.all([p1,p2,p3]).then(values=>console.log(values));