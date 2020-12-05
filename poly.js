function disp(x, y) {
    if (typeof x == "string") {
        console.log(x + "world");
    }
    if (x == "number") {
        var sum = x + 10;
        console.log(sum);
    }
    if (x != "undefined") {
        console.log("inside", x);
        console.log("inside", y);
    }
}
disp("helloo");
disp(123);
disp(1, "hello");
