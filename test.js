///<reference path="Ishapes.ts"/>
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("drawing a circle");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
var Drawing;
(function (Drawing) {
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
        }
        Rectangle.prototype.draw = function () {
            console.log("drawing a rectangle");
        };
        return Rectangle;
    }());
    Drawing.Rectangle = Rectangle;
})(Drawing || (Drawing = {}));
///<reference path="Ishapes.ts"/>
function drawShapes(obj) {
    obj.draw();
}
var circle = new Drawing.Circle();
var rectangle = new Drawing.Rectangle();
drawShapes(circle);
drawShapes(rectangle);
