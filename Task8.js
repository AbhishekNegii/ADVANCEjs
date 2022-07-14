let userDetails = {
    fname: "Abhishek",
    lname:"Negi",
    }
let printDetails = function(state,country){
        console.log(this.fname+" from "+state+ " "+country)
    }
printDetails.call(userDetails,"Uttarakhand","India");
let userDetails2={
    fname: "Virat",
    lname: "Kohli"
};

// call
printDetails.call(userDetails2,"Mumbai", "India");

//apply

printDetails.apply(userDetails2,["Mumbai", "India"]);

//Bind   ( same as call but copy function and invoke later)

let newdata= printDetails.bind(userDetails,"Uttarakhand", " India");
newdata();


let student ={
    age: 20
}
let printAge= function(){
    console.log(this.age)
}

let ageNew=printAge.bind(student);
ageNew();


// currying (In JS 2 methods are their for currying 1:- using Bind 2:- using Closer)

//using Bind
let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

//using closer
 
let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo1 = multiply1(2);
multiplyByTwo(4);