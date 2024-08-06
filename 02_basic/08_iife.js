/**
 * immediately invoked function expressions(IIFE)
 * This function are use to run the function immediately once program is run.
 * can be use to run database connection code.
 * 
 */

// function immediateConnection(){
//     console.log('DB connected');
    
// }

// immediateConnection()

//iife ()() --> it was introduced to avoid global scope pollution.

(function() {
    var localVariable = 'I am local';
    // Code here is protected from the global scope
})();
// localVariable is not accessible here

(function immediateConnection(){
    //named iife
    console.log(' from  iife DB connected');
    
})();

((name) => {
    //un named with param iife func
    console.log(`from  iife arrow function DB connected ${name}`);
    
})('javascript');

//use semi colon after the iife because it does't know where the context ends.

