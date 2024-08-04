/**
 * object --> when ever it is create through the contructor it is singleton.
 * object.create() --> singleton object
 * when created through literal it is not singleton.
 * key is alway considered as string in object whether you state it or not.
 */

//define a symbol and use it as object key.
const mySym = Symbol('key1');

//object literals way
/**
 * to add symbol into a object as symbol we use square bracket because without it 
 *  the key will be treated as string .
 */
 const user = {
    name: 'shivam',
    "full name":'shivam singh',
    [mySym]: 'myKey1',
    age: 24,
    location: 'Delhi',
    email: 'shivam@yopmail.com',
    isLoggedIn: false,
    lastLoginDate:['monday','sunday']
 }

 //accessing value of object
 console.log(user.email); //not recommened  because if i pass key with name with space will not be able access it as it is in full name.
 console.log(user["email"]);
 console.log(user["full name"]);
 //console.log(user.mySym); //also it can be access using [] instead of .keyName

user.email = 'user@change.com'
//if we want to freeze the object from further changes than we can do that with.
// Object.freeze(user)
//now if we make change it won't reflect in object neither it will throw any error.
// user.email ='freeze@freeze.com'
console.log(user)
/**
 * output
 * {
  name: 'shivam',
  'full name': 'shivam singh',
  age: 24,
  location: 'Delhi',
  email: 'user@change.com',
  isLoggedIn: false,
  lastLoginDate: [ 'monday', 'sunday' ],
  [Symbol(key1)]: 'myKey1'
}
 */

//defining method inside object

user.greeting = function(){
    console.log("hello from backend");
}

user.greetingTwo = function(){
    console.log(`hello js user,${this.name}`); //this keyword is used to access the element inside the object.
}
console.log(user.greeting); //[Function (anonymous)] 
console.log(user.greeting()); //hello from backend
console.log(user.greetingTwo()); //hello js user,shivam