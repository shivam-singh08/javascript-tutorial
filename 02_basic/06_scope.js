/**
 * scope are global,functional/local and block scope.
 */

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); //will throw error as let is block scoped can't be access outside
// console.log(b); // same as let const can't be access.
// console.log(c); // it can be access.

/**
 * closure --> a function within the block has access to it's outer block variable.
 */

function one(){
    const username = 'javascript';

    function two(){
        const website = 'data structure';
        console.log(username); //javascript because of closure
        function third(){
            console.log('i am inside third fn: ',username); //i am inside third fn:  javascript
            
        }
        third();
        
    }
    // console.log(website); //it will throw error as it can't be access outside the scope

    two();
    
}

one();

if(true){
    const username = 'js';
    if(username === 'js'){
        const website = 'dsa';
        console.log(username + ' ' + website);
        
    }
    // console.log(website); // it will throw as variable out of can't be access.
    
}
// console.log(username); // it will throw as variable out of can't be access.


