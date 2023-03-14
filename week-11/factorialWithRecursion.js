function factorial(n) {
    if (n <= 0) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

function factorialWithDebug(n) {
    console.log("factorial(", n, ")");
    if (n <= 0) {
        console.log("return1: 1");
        return 1;
    } else {
        console.log("n1:", n);
        let f = factorialWithDebug(n-1);
        console.log("n2:", n);
        console.log("factorial(", n-1, "):", f);
        console.log("return2: ", n * f);
        return (n * f);
    }
}

var n = 5;
var f = factorialWithDebug(n);
console.log("");
console.log(n, "factorial:",  f, "factorial2:", factorial(n));