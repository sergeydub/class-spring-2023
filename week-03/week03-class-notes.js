function convertToLowCase(str) {
    return str.toLowerCase();
}

/**
Write your own version of removeNonAphaNum()
a. Use for loop and loop through the string
b. Create a new string with only valid chars
c. Return this new string
 */
function removeNonAlphaNum(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        ...
    }
    return newStr;
}

/*
Write your own version of reverse()
Use for loop and loop through string in reverse order
Create a new string by adding chars in reverse order
Return this new string
*/
function reverseString(str) {
    var newStr = "";
    for (var i = str.length-1; i > -1; i--) {
        // ...
    }    
    return newStr;
}
 
function isPalindrome (str) {
    var step1 = convertToLowCase(str);
    var step2 = removeNonAlphaNum(step1);
    var step3 = reverseString(step2);
    return (step2 == step3);
}

var str = "?This is a test1!";
var isPal = isPalindrome(str);
console.log(str, isPal);