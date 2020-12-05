var Demo;
(function (Demo) {
    var Calcs = /** @class */ (function () {
        function Calcs() {
        }
        Calcs.prototype.add = function (a, b) {
            console.log(a + b);
        };
        Calcs.prototype.sub = function (a, b) {
            console.log(a - b);
        };
        return Calcs;
    }());
    Demo.Calcs = Calcs;
})(Demo || (Demo = {}));
