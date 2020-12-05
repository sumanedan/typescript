class Employee {
    static companycode:string="c1234"
    name: string
    salary: number
    age: number
    dob: Date
    static i:number=1
    j:number=1
    constructor(name: string, salary: number, age: number, dob: Date) {
        this.name = name
        this.salary = salary
        this.age = age
        this.dob = dob
        Employee.i+=1
        this.j+=1
        console.log(Employee.i)
        console.log(this.j)
    }
    incSalary(amount: number): number {
        this.salary += amount;
        return this.salary
    }
}

let emp1 = new Employee("suman",30000,32,new Date("1988-01-17"))
console.log(emp1)
let emp2 = new Employee("sum",300,333,new Date("1988-01-17"))
console.log(emp2)
let result=emp1.incSalary(30000);
console.log(result)
//let emp2:Employee=new Employee(...)can be also given as
let data:any='hgf'
//data=123
//data=[]
Employee.companycode="c12345"
console.log(emp2 instanceof(Employee))
function getData(...args:number[]){
args.forEach((x)=>{
    console.log(x)
    //console.log(args)
})
}
getData(10,20,30,40,50,60,70)
function factorial(n:number){
    if(n==1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(4)) 
//tuple
let employee_tuple:[string,string,number]=["123","ann",123]
employee_tuple.push("124")
console.log(employee_tuple)
let employee_records:[string,string,number][]=[["123","ann",123],["124","ram",3232]]
employee_records.push(["125","raj",465456])
console.log(employee_records)








