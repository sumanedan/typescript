"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var cars_1 = require("./cars");
describe("Running tests for the class Car", function () {
    it("testing getEngine fn", function () {
        var car = new cars_1.Car("1.1 litres");
        chai_1.expect(car.getEngine()).to.equal("1.1");
    });
});
