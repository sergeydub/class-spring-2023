

var romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var roman = "XLLICDN";
var res = 0;
for (var i = 0; i < roman.length; i++) {
    res += romanValue[roman[i]];
    console.log(i, roman[i], romanValue[roman[i]], res);
}

// console.log(Math.PI);