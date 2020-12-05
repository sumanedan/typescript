class A{
    x=10
    private y=30;
    protected z=50
    test(){
        console.log(this.y)
        this.y=20
    }
}
let o1=new A()
o1.test()
class B extends A{
protected k=123
sample(){
    console.log("inside class B",this.z)
}
}
let o2=new B();
o2.sample()
class C extends B{            //multilevel inheritance
view(){
    console.log("inside function C",this.z)
}
}
let o3=new C()
o3.view()
