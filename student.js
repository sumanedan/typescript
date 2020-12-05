//class Student{
//   name:string="Arun"
//   age:number=20
//}
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        console.log("constructor invoked......");
    }
    Student.prototype.display = function () {
        console.log("Name", this.name);
        console.log("age", this.age);
    };
    return Student;
}());
var obj = new Student("Arun", 20);
console.log(obj);
obj.display();
var obj1 = new Student("rose", 13);
console.log(obj1);
obj1.display();
