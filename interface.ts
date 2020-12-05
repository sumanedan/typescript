interface IShapes {
    name: string
    draw(): void

}
interface Itest{
    test;
}
interface ISample extends IShapes,Itest{
    title:string
}
class Circle implements ISample{
test="test"
name="Circle"
title="Class Circle"
draw(){
    console.log("Drawing a Circle")
}
}
let c1=new Circle()
c1.draw()
class Square implements IShapes{
name="Square"
draw(){
    console.log("drawing a square")
}
}
let c2=new Square()
c2.draw()
