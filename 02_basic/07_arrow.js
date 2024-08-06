/**
 * this keyword -->
 */

const user = {
    username: 'john',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to javascript tutorial`);
        /**
         * whenever we have to access variable from current context we need use this
         * this --> refer to the current context
         * variable of the object can't be accessed without this keyword.
         */
        console.log(this); // this represent the current context as
        /**
         * for 1st call
         * {
            username: 'john',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }

            for 2nd call
            {
            username: 'shivam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }
            so here the this is pointing to the object.
         */
        
        
    }
}

user.welcomeMessage()
user.username = 'shivam' //here the context is change.
user.welcomeMessage() // this will print --> shivam, welcome to javascript tutorial.

/**
 * some more details about this and current contexts
 * if we check the contexts by printing this over here is show {} empty object as current contexts.
 * in node current context for this is empty object.
 * in browser this will show window object as current contexts
 * 
 */
console.log(this); //{}


/**
 * arrow function and this keyword relation.
 */

function standard(){
    let username = 'javascript';
    console.log(this.username); // output -- undefined because this does't work in function
    
}

standard()

const arrowFunc = ()=>{
    let username = 'js';
    console.log(this); //{}
    console.log(this.username); //undefined because we can't use this keyword inside fn.
}

arrowFunc()

//basic way

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// if it is a single statement function then we can write it as
 const addTwo = (num1, num2) =>  (num1 + num2)

 //In JavaScript, returning object literals within functions is concise: () => ({ key: value }) 

console.log(addTwo(4, 5));

/**
 *  Limitations of Arrow Functions
    Arrow functions do not have the prototype property.
    Arrow functions cannot be used with the new keyword.
    Arrow functions cannot be used as constructors.
    These functions are anonymous and it is hard to debug the code.
    Arrow functions cannot be used as generator functions that use the yield keyword to return multiple values over time.
 */



