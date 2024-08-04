/**
 * type conversion --> changing from one type to another. 
 */

let valueInString = "12342"

console.log(typeof valueInString); //string
console.log(typeof(valueInString)); //string

let valueInString2 ='123433abcd';
let valueInNumber = Number(valueInString2);
console.log('valueInNumber ', valueInNumber); //nan as output ---> not a number.
console.log('type of valueInNumber', typeof(valueInNumber)); //number

/**
 * Numeric conversion in mathematical fn or expression happen automatically.
 * for operation other than +
 * 
 */
let value1 ="6"
let value2 = "2"
console.log("value of string '2' and '6' ", value1/value2); // output will be 3

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean("0"));//true because it is string if it would be number than it would be false.
console.log(Boolean(" ")); //true as there is empty space.

/**
 * Value	     Becomes…
   undefined	  NaN
   null	          0
   true / false	  1 / 0
   string	      The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
 * 
 */