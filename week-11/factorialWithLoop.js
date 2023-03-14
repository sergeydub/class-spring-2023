
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

var n = 5;
var f = factorial(n);
console.log("");
console.log(n, "factorial:",  f);