/**
 * operations 
 */

let firstName = 'shivam ';
let lastName = 'singh';

console.log(firstName + lastName);

console.log('1' + 2); //12
console.log('1' +'2'); //12
console.log(1 + "2"); //12
console.log('1' + 2 + 2); //122
console.log(1+ 2 + "2"); //32

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3");  //2
console.log("2" * "3"); //6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2);//nan
console.log("  -9  " + 5); //-9 5
console.log("  -9  " - 5); //-14
console.log(null + 1);  //1
console.log(undefined + 1); //Nan
console.log(" \t \n" - 2); //-2

console.log(+true); //will return 1 because it convert the value into number when we use + sign.
console.log(+""); //return 0
let isNumber = +true;
console.log(typeof(isNumber))

//prefix and post fix value

let counter =10
let val2 = 9
console.log(counter++); //10
console.log(++counter); //12
console.log(counter--); //12
console.log(--counter); //10
console.log((val2--) * 2) //18 value change after the operation
console.log(val2); //8