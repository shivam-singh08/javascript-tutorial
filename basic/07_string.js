/**
 * string is denoted by both '' and "".
 */

const name = 'shivam'
const repoCount = 50

//console.log(name + repoCount + " value"); 
//not recommended coding practice.

//instead use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//other way to declare string

const firstName = new String('shivam');
console.log(name[0]);
console.log(firstName[0]);

console.log(name.length); //6
console.log((name.toUpperCase())); //SHIVAM

console.log(name.charAt(2)); //i
console.log(name.indexOf('m')); //5

const newString = name.substring(0,4); // we can't use negative value in this as we can use in slice. o/p shiv
console.log(newString); //shiv

const strSlice = name.slice(-3,-1); //va exclude the last index
console.log(strSlice); //va

const spaceString = "    hello      ";
console.log(spaceString.trim()); //remove the extra space.

const url = "https://linkedin.com/linkedin%20page";
console.log(url.replace('%20','-')); //https://linkedin.com/linkedin-page

console.log(url.includes('linkedin')); //true
console.log(url.startsWith('link')); //false
console.log(url.endsWith('age')); //true

console.log(name.split('')); //[ 's', 'h', 'i', 'v', 'a', 'm' ]

/**
 * Summary
There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
We can use special characters, such as a line break \n.
To get a character, use: [] or at method.
To get a substring, use: slice or substring.
To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
There are several other helpful methods in strings:

str.trim() – removes (“trims”) spaces from the beginning and end of the string.
str.repeat(n) – repeats the string n times.

 */


