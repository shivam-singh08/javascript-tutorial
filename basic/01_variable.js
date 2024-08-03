// variable declaration with const, let and var.
/*
prefer not to use var because of issue in block and function scope.
output

*/
const accountId = 144554 // define with const value can't be changed.
let accountEmail = 'javascript@google.com' //create a block scope
var accountPassword ='123445' //functional scope
accountCity = 'delhi' //global variable can be declared with keyword var or without any keyword.
let accountState //this value is undefined by default in javascript.

//acountId = 2 //not allowed
//let accountEmail ="acbcd" // can't be redeclared in the same scope.
var accountPassword = 'djfvnv' //possible to redeclare using var keywords.


accountEmail = "js@gmail.com"
accountCity = 'noida'

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //print in table form.
/*
output
┌─────────┬────────────────┐
│ (index) │ Values         │
├─────────┼────────────────┤
│ 0       │ 144554         │
│ 1       │ 'js@gmail.com' │
│ 2       │ '1233333'      │
│ 3       │ 'noida'        │
│ 4       │ undefined      

*/
