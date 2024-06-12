
// "use strict";
// let username = 'Dave';
// console.log(username);
// let a = 12;
// let b = '6';
// let c = 2;
// console.log(a / b);
// console.log(c * b);


//arrays and objects

// "use strict";
// let stringArr = ['one', 'hey', 'jimmie'];
// let guitars = ['Strat', 'Les Paul', 0111];
// let mixedData = ['VUE', 1984, true];
// stringArr[0] = 'james';
// stringArr.push('hey');
// guitars[0] = 1984;
// guitars.unshift('Jim');
// let test = [];
// let bands = [];
// bands.push('Van Halen');
// // Tuple 
// let myTuple = [jimmie', 42, true];
// let mixed = ['james', 1, false];
// myTuple[1] = 42;
// // Objects
// let myObj;
// myObj = [];
// console.log(typeof myObj);
// myObj = bands;
// myObj = {};
// const exampleObj = {
//     prop1: 'jimmie',
//     prop2: true,
// };
// exampleObj.prop1 = 'james';
// let evh = {
//     name: 'Eddie',
//     active: false,
//     albums: [1984, 0111, 'OU812']
// };
// let jp = {
//     active: true,
//     albums: ['I', 'II', 'IV']
// };
// const greetGuitarist = (guitarist) => {
//     if (guitarist.name) {
//         return `Hello ${guitarist.name.toUpperCase()}!`;
//     }
//     return 'Hello!';
// };
// console.log(greetGuitarist(jp));
// // Enums 
// // "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
// var Grade;
// (function (Grade) {
//     Grade[Grade["U"] = 1] = "U";
//     Grade[Grade["D"] = 2] = "D";
//     Grade[Grade["C"] = 3] = "C";
//     Grade[Grade["B"] = 4] = "B";
//     Grade[Grade["A"] = 5] = "A";
// })(Grade || (Grade = {}));
// console.log(Grade.U);



"use strict";
// Literal types
let myName;
let userName;
userName = 'bond';
// functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters 
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters 
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// use of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
