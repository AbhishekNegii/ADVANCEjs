class student{
    static count=0;
    // let minAge=15;
    // let minMarks=40;
    constructor(name,age,phoneno,marks)
    {
        this.name=name;
        this.age=age;
        this.phoneno=phoneno;
        this.marks=marks;
                
    }
    

    placeElig(minAge=15)
    {
        return(minMarks=40)=>{
        if(this.marks>minMarks && this.age >minAge)
        {
            console.log(`${this.name} is eligible for placement`)
        }
    }
    }
    
}

const student1=new student('Rahul',15,4567,42);
const student2=new student('Sameer',16,674567,38);
const student3=new student('Sanjeev',15,456987,47);
const student4=new student('Ram',15,6544567,67);
const student5=new student('Shyam',16,4523467,25);

student1.placeElig();

