"use strict";
/**
 * use strict keyword was introduced to treat all js code as newer version.
 * code is executed in strict mode.
 * help to write cleaner code,like preventing you from using undeclared variables.
 */

//alert("hello") // we are using node.js not the browser it is browser based functionality.

/**
 * premitive type of data-type
 * number => 2 to power 53
 * bigInt => append n at last of the number
 * string => ""
 * boolean => true/false
 * null => standalone value. 
 * undefined => default value of variable defined.
 * symbol => uniqueness k liye symbol use krte hai.
 * 
 * non-premitive type:
 * object
 * 
 */

let isString = "javascript";
let isNumber = 22;
let bigData = 100293993999939922n;
let isBoolean = true;
let isNull = null;
let isUndefined = undefined;
let isSymbol = Symbol('hello');
let isObject = {
    isString,
    isNumber
}

console.log("isString ------> ", typeof(isString)) //string
console.log("isNumber ------> ", typeof(isNumber)) //number
console.log("bigData  ------> ", typeof(bigData)) //bigint
console.log("isNull  -------> ", typeof(isNull)) //object
console.log("isUndefined ----> ", typeof(isUndefined)) //undefined
console.log("isSymbol -------> ", typeof(isSymbol)) //symbol
console.log("isObject -------> ", typeof(isObject)) //object

null === undefined    // false
null == undefined     // true







