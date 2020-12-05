var Expertzlab;
(function (Expertzlab) {

    var   Calc   = /** @class */ (function () {
        function Calc() {
        }

        Calc.prototype.doSum = function (limit) {
            var sum = 0;
            for (var i = 0; i <= limit; i++) {
                sum += i;
            }
            return sum;
        };
    	

Calc.prototype.doSubt = function(a, b){
        	return a - b;
    	}
    	return Temp;
	}());
	Expertzlab.Calc = Calc;
})(Expertzlab || (Expertzlab = {}));
