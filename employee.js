var Employee = /** @class */ (function () {
    function Employee(name, salary, age, dob) {
        this.j = 1;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.dob = dob;
        Employee.i += 1;
        this.j += 1;
        console.log(Employee.i);
        console.log(this.j);
    }
    Employee.prototype.incSalary = function (amount) {
        this.salary += amount;
        return this.salary;
    };
    Employee.companycode = "c1234";
    Employee.i = 1;
    return Employee;
}());
var emp1 = new Employee("suman", 30000, 32, new Date("1988-01-17"));
console.log(emp1);
var emp2 = new Employee("sum", 300, 333, new Date("1988-01-17"));
console.log(emp2);
var result = emp1.incSalary(30000);
console.log(result);
//let emp2:Employee=new Employee(...)can be also given as
var data = 'hgf';
//data=123
//data=[]
Employee.companycode = "c12345";
console.log(emp2 instanceof (Employee));
function getData() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (x) {
        console.log(x);
        //console.log(args)
    });
}
getData(10, 20, 30, 40, 50, 60, 70);
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4));
//tuple
var employee_tuple = ["123", "ann", 123];
employee_tuple.push("124");
console.log(employee_tuple);
var employee_records = [["123", "ann", 123], ["124", "ram", 3232]];
employee_records.push(["125", "raj", 465456]);
console.log(employee_records);
