/**
 * 5! = 5 * 4 * 3 * 2 * 1
 * 4! = 4 * 3 * 2 * 1
 * 3! = 3 * 2 * 1
 * 2! = 2 * 1
 * 1! = 1 * 1
 * 0! = 1
 * 
 * 5! = 5 * 4!
 * 4! = 4 * 3!
 * 3! = 3 * 2!
 * 2! = 2 * 1!
 * 1! = 1 * 0!
 * 0! = 1
 * 
 * @param {*} n 
 * @returns 
 */
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return (n + factorial(n-1));
    }
}

var n = 6;
console.log("");
console.log(n, "sum:", factorial(n));