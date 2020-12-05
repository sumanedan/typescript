class Polygon{
    nsides:number
    name:string
    constructor(nsides:number,name:string){
        this.nsides=nsides
        this.name=name
    }
    area():number{
        console.log("Area of Polygons")
        return 0;
    }
}
class Rectangle extends Polygon{
    length:number
    breadth:number
    constructor(nsides:number,name:string,l:number,b:number){
        super(nsides,name)
        this.length=l
        this.breadth=b
    }
    area():number{
        console.log("Area of a",this.name)
        super.area()
        return this.length*this.breadth
    }
}
let rectangle=new Rectangle(4,"Rectangle",10,12)
console.log("Area=",rectangle.area())