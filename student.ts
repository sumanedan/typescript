//class Student{
 //   name:string="Arun"
 //   age:number=20
//}
class Student{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        console.log("constructor invoked......")

    }
    display(){
        console.log("Name",this.name)
        console.log("age",this.age)
    }
}
let obj=new Student("Arun",20)
console.log(obj)
obj.display();
let obj1=new Student("rose",13)
console.log(obj1)
obj1.display()