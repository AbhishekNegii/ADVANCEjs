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
}

// call
printDetails.call(userDetails2,"Mumbai", "India")

//apply

printDetails.apply(userDetails2,["Mumbai", "India"])