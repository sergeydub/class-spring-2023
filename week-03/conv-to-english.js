let single = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
let tenth = ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function appendWord(str, word) {
    let spacer = "";
    if (str.length > 0 && str.charCodeAt(str.length - 1) != 32) {
        spacer = String.fromCharCode(32);
    }
    if (word.length > 0) {
        return str + spacer + word;
    }
    return str;
}

function underHundredToEngl(n) {
    let engl = "";
    let v;

    v = Math.floor(n / 100);
    if (v >= 1) {
        engl = appendWord(engl, single[v - 1]);
        engl = appendWord(engl, "Hundred");
        n -= v * 100;
    }
    v = Math.floor(n / 10);
    if (v >= 2) {
        engl = appendWord(engl, tenth[v - 1]);
        n -= v * 10;
    }
    v = n;
    if (v > 0 && v < 20) {
        engl = appendWord(engl, single[v - 1]);
        n -= v;
    }
    return engl;
}

/**
 * Implement the solution in this function
 *
 * @param {number} n The number
 * @returns {string} The text version of the number
 */
function numberToText (n) {
    let engl = "";
    let v;
    v = Math.floor(n / 1000);
    if (v >= 1) {
        engl = appendWord(engl, underHundredToEngl(v));
        engl = appendWord(engl, "Thousand");
        n -= v * 1000; 
    }
    engl = appendWord(engl, underHundredToEngl(n));
    return engl;
}

// for (var i = 990; i < 1110; i++) {
//     if (i == 20) {
//         console.log("stop");
//     }
//     console.log(i, numberToText(i));
// }

console.log(numberToText(33000));
