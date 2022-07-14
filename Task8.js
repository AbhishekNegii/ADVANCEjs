let userDetails = {
    fname: "Abhishek",
    lname:"Negi",
    printDetails : function(){
        console.log(this.fname)
    }
}
userDetails.printDetails();
let userDetails2={
    fname: "Virat",
    lname: "Kohli"
}
userDetails.printDetails.call(userDetails2)