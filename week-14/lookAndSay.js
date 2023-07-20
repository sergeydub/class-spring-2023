function getCountOfFirstChar(str) {
    let i = 0;
    while (str[i] == str[0] && i < str.length) {
        i++;
    }
    return i;
}

function lookAndSayEx(str) {
    let result = "";
    while (str.length > 0) {
        let count = getCountOfFirstChar(str);
        let num = str[0];
        result += count + num;
        str = str.slice(count);
    }
    return result;
}

/**
 * Implement the solution in this function
 *
 * @param {number} n The number of item in the sequence.
 * @returns {string} The n-th number in the look-and-say seequence.
 */
function lookAndSay (n) {
    let result = "1";
    for (let i = 1; i < n; i++) {
        result = lookAndSayEx(result);
    }
    return result;
}

console.log(lookAndSay(7));