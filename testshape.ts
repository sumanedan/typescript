///<reference path="Ishapes.ts"/>
function drawShapes(obj:Drawing.Ishape){
obj.draw()
}
let circle=new Drawing.Circle()
let rectangle=new Drawing.Rectangle()
drawShapes(circle)
drawShapes(rectangle)