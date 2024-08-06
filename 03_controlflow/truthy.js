/**
 * falsy value --> 
 * false, 0, -0, 0n , "", null, undefined, Nan
 * 
 * truthy value --> all value other than falsy value are truthy
 * "0" , 'false' , " " , [],{},function(){}
 */

const arrEmptyCheck = []
if(!arrEmptyCheck.length){
    console.log('empty array');
    
}

//check empty object

const emptyObj = {}
if(!Object.keys(emptyObj).length){
    console.log('empty object');
    
}

//Nullish coalescing operator (??): null undefined.

let val1;
// val1 = 5 ?? 10   //5 will be assigned
// val1 = null ?? 10 //10 will be assigned
// val1 = null ?? undefined  //undefined
//val1 = undefined ?? null ?? 10  //10
// val1 = undefined ?? 30 ?? 20  //30

// console.log(val1);

//terniary operator is different from nullish coalescing

//condition ?  true : false;

const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log('more than 80') : console.log('less than');
;

