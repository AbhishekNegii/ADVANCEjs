class student{
    static count=0;
    constructor(name,age,phoneno,marks)
    {
        this.name=name;
        this.age=age;
        this.phoneno=phoneno;
        this.marks=marks;
           student.countStu();
       
    }
    static countStu(){
        return student.count++;
    }
    
    eligible()
{
    if(this.marks>40)
    {
        console.log(`${this.name} is Eligible`);
    }
    else
    {
        console.log(`${this.name} is not Eligible`);
    }
}
}


const student1=new student('Rahul',15,4567,42);
const student2=new student('Sameer',16,674567,38);
const student3=new student('Sanjeev',15,456987,47);
const student4=new student('Ram',15,6544567,67);
const student5=new student('Shyam',16,4523467,25);
console.log(student.countStu());
student1.eligible();
student2.eligible();
student3.eligible();
student4.eligible();
student5.eligible();


