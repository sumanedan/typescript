var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        console.log("inside parent class");
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, address, rollno, marks, batch) {
        var _this = _super.call(this, name, age, address) || this;
        console.log("inside child class");
        _this.rollno = rollno;
        _this.marks = marks;
        _this.batch = batch;
        return _this;
    }
    Student.prototype.viewData = function () {
        console.log("NAME" + this.name);
        console.log("AGE" + this.age);
        console.log("ROLLNO:" + this.rollno);
        this.test();
    };
    Student.prototype.test = function () {
        console.log("test method");
    };
    return Student;
}(Person));
var obj = new Student("Anna", 20, "NYC", 1, [90, 85, 75], "CSE");
console.log(obj);
//console.log("Name:"+obj.name)
//console.log("Age:"+obj.age)
obj.viewData();
console.log(obj instanceof Person);
console.log(obj instanceof Student);
