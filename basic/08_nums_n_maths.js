/**
 * numbers and mathematics
 * 
 */
const score = 400;
console.log(score); //400
const balance = new Number(100); //other way to declare a number.
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00 precise the value after decimal.

const otherNumber = 123.89665
console.log(otherNumber.toPrecision(4)); //123.9 count value from left to right n give precision

const hundreds =1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 make it with standards bydefault use en-us standard.

/**
 * maths --> bydefault library in js
 */

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.5)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(7,8,9,0)); //0
console.log(Math.max(92,9,3)); //92

console.log(Math.random()) //give random value between 0 n 1.