/**
 * filter 
 * map
 * reduce
 */

//filter

const myNums = [1, 2, 3, 4, 5];

// const newNums = myNums.filter((num)=> num >4);
// console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]


//map
// const newNums = myNums.map((num)=> num + 10);
// const newNums = myNums
//                 .map((num)=> num * 10)
//                 .map((num)=> num+1)
// console.log(newNums);


//reduce -- array.reduce()

// const sumArray = myNums.reduce((acc,currval)=>{
//     return acc + currval
// },0)
//acc is the acculator where result will be stored n 0 at the last is the intial value of accumulator.

//arrow func
const sumArray = myNums.reduce((acc,currval)=> acc + currval,0)
console.log(sumArray);




