// console.log('person1:: show ticket');
// console.log('person2:: show ticket');
// const preMovie= async () =>{
// const promiseWifeBringingTicket = new Promise ((resolve , reject) => {
//     setTimeout(()=> resolve ('ticket'),3000);
// })
// try{
//     let ticket= await promiseWifeBringingTicket;
// }
// catch(e){
//     ticket='sad face';
// }
// const getPopcorn =new Promise ((resolve,reject)=> resolve('popcorn'));
// const getCandy= new Promise((resolve,reject)=> resolve ('candy'));
// const getCoke = new Promise((resolve, reject)=> resolve('colddrink'));
// const addButter= new Promise ((resolve, reject)=> resolve('butter'))
// const getColdDrink=new Promise((resolve,reject)=> resolve('coldDrink'));
// let ticket= await promiseWifeBringingTicket;
// let [popcorn,candy,coldrink]= await Promise.all([getPopcorn, getCandy, getCoke])
// console.log(`${popcorn}, ${candy}, ${coldrink}`);
// console.log(`wife:i have the ${ticket}`);
// console.log('husband: we should go in');
// console.log('wife: no iam hungry');
// let popcorn = await getPopcorn;
// console.log(`husband : i got some ${popcorn}`);
// console.log('husband: we should go in');
// console.log('wife: i need butter on my popcorn');
// let butter = await addButter;
// console.log(`husband:: i got some ${butter} on popcorn`);
// console.log('husband:: any thing else?');
// console.log('wife:: lets go we are getting late');
// console.log('husband: thank you for the remainder');
// const coldDrink= await getColdDrink;
// console.log(`wife:: i need ${coldDrink} also`);
// console.log('husband:: ok wait i will get it')
// return ticket;
// }

// preMovie().then((m)=>console.log(`person3:: show ${m}`));
// console.log('person4:: show ticket');
// console.log('person5:: show ticket');



// converting create and del post using async and await

const posts=[
    {title: 'post1', body: 'this is post 1'},
    {title: 'post2', body: 'this is post 2'}
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
        },4000) 
    }
async function print(){
await createPost({title: 'post3', body: 'this is post 3'})
await getPost();
await createPost({title: 'post4', body: 'this is post 4'})
await getPost();
await createPost({title: 'post5', body: 'this is post 5'})
await getPost();
    }
print();
// function delpost(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//       if(posts.length>0)
//       {
//         posts.pop();
//         resolve();
//       }
//       else{     
//         reject('err :Array is empty');
//       }
//      },1000)
//     })
// }
// delpost().then(delpost).catch(err=> console.log(err))
