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
var A = /** @class */ (function () {
    function A() {
        this.x = 10;
        this.y = 30;
        this.z = 50;
    }
    A.prototype.test = function () {
        console.log(this.y);
        this.y = 20;
    };
    return A;
}());
var o1 = new A();
o1.test();
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.k = 123;
        return _this;
    }
    B.prototype.sample = function () {
        console.log("inside class B", this.z);
    };
    return B;
}(A));
var o2 = new B();
o2.sample();
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.view = function () {
        console.log("inside function C", this.z);
    };
    return C;
}(B));
var o3 = new C();
o3.view();
