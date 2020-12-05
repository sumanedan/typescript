var Circle = /** @class */ (function () {
    function Circle() {
        this.name = "Circle";
        this.title = "Class Circle";
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a Circle");
    };
    return Circle;
}());
var c1 = new Circle();
c1.draw();
var Square = /** @class */ (function () {
    function Square() {
        this.name = "Square";
    }
    Square.prototype.draw = function () {
        console.log("drawing a square");
    };
    return Square;
}());
var c2 = new Square();
c2.draw();
