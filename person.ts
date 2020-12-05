class Person{
    name:string
    age:number
    address:string
    constructor(name:string,age:number,address:string){
        console.log("inside parent class")
        this.name=name
        this.age=age
        this.address=address
    }
}
class Student extends Person{
rollno:number
marks:number[]
batch:string
constructor(name:string,age:number,address:string,rollno:number,marks:number[],batch:string){
    super(name,age,address)
    console.log("inside child class")
    this.rollno=rollno
    this.marks=marks
    this.batch=batch
}
viewData(){
    console.log("NAME"+this.name)
    console.log("AGE"+this.age)
    console.log("ROLLNO:"+this.rollno)
    this.test()
}
test()
{
    console.log("test method")
}
}
let obj=new Student("Anna",20,"NYC",1,[90,85,75],"CSE")
console.log(obj)
//console.log("Name:"+obj.name)
//console.log("Age:"+obj.age)
obj.viewData()
console.log(obj instanceof Person)
console.log(obj instanceof Student)

