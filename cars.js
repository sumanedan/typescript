"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine) {
        this.Engine = engine;
    }
    Car.prototype.getEngine = function () {
        return this.Engine;
    };
    Car.prototype.add = function (x, y) {
        return x + y;
    };
    return Car;
}());
exports.Car = Car;
