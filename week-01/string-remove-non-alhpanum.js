
function removeNonAlphaNum(str) {
    /**
     * Regular expression that matching on 
     * everything that is not in A-Z or a-z or 0-9
     */
    let regex = /[^A-Za-z0-9]/g;

    /**
     * Replace every matched character with a blank
     * string
     */
    return str.replaceAll(regex, "");
}

var str = "this is a test!";

console.log(str);
console.log(removeNonAlphaNum(str));