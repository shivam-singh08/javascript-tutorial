/**
 * there are 2 type of memories used to store anything is js.
 * stack -- > for primitive datatype value. ---> in this we get the copy of value
 * heap ---> for non primitive datatype value. --> in this we get the reference of the value
 */

let myName = "javascript" //primitive type

let anotherName = myName;
console.log(anotherName);

anotherName = 'js'
console.log("after changing value in the anotherName", myName);
console.log(anotherName);

let userOne ={
    email:'user@google.com',
    address:'usser'
}

let userTwo = userOne //refernce

userTwo.email ='userTwo@gmail.com'
console.log(userOne.email); //userTwo@gmail.com