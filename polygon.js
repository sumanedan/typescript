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
var Polygon = /** @class */ (function () {
    function Polygon(nsides, name) {
        this.nsides = nsides;
        this.name = name;
    }
    Polygon.prototype.area = function () {
        console.log("Area of Polygons");
        return 0;
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(nsides, name, l, b) {
        var _this = _super.call(this, nsides, name) || this;
        _this.length = l;
        _this.breadth = b;
        return _this;
    }
    Rectangle.prototype.area = function () {
        console.log("Area of a", this.name);
        _super.prototype.area.call(this);
        return this.length * this.breadth;
    };
    return Rectangle;
}(Polygon));
var rectangle = new Rectangle(4, "Rectangle", 10, 12);
console.log("Area=", rectangle.area());
