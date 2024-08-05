/**
 * function
 */
function addTwoNumbers(num1,num2){ //input taken inside fn are called parameter ex num1 n num2.
    console.log(num1+num2);
    
}
addTwoNumbers(3,4);  // here the it is called as argument

//other ways to take input for fn.
//assigning default value to the parameter of fn.

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000)); //[ 200, 400, 500, 2000 ]

function objValue(myObj){
    console.log(`hello this is object example accessing key ${myObj.name}`);
}

objValue({
    name:'javascript'
})

//passing array as params in fn

function returnSecValue(getArray){
    return getArray[1]
}

console.log(returnSecValue([200,500,400,600]));
