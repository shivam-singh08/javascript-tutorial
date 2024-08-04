/**
 * The Array object, as with arrays in other programming languages,
 *  enables storing a collection of multiple items under a single variable name, 
 * and has members for performing common array operations.
 *
 * array in js is resizable.
 * array contain mix of different datatype
 * 
 * 
 */

const myArr = [0,1,2,3,4,5];
const myArr2 = new Array('hello','hi')

console.log(myArr[0]);  //0
console.log(myArr.length); //6
console.log(myArr2); //['hello', 'hi']

//array methods

myArr.push(6) //push at last index of array.
console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]

myArr.pop() //remove the last ele from array

myArr.unshift(8); //shift array insert element at zero index
myArr.shift() //remove the element from the zero index.

console.log(myArr.includes(9)); //boolean value return
console.log(myArr.indexOf(3)); //return index if exists else -1

const newArr = myArr.join() //add all element into string.
console.log(newArr) //0,1,2,3,4,5
console.log(typeof newArr); //string

/**
 * slice --> create a array from existing array doesn't manipulate the original array.
 * splice --> create a array including both the index also it manipulate the original array.
 * 
 */
const OrgArr = [0,1,2,3,4,5];
console.log("A ",OrgArr); //A  [ 0, 1, 2, 3, 4, 5 ]
//using slice
console.log(OrgArr.slice(1,3)); //[ 1, 2 ] not included last index.
console.log("B ",OrgArr);  //B  [ 0, 1, 2, 3, 4, 5 ]

//using splice
console.log(OrgArr.splice(1,3)); //[ 1, 2, 3 ]
console.log("C ",OrgArr); //C  [ 0, 4, 5 ]