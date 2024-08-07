/**
 * for of -- >
 * 
 */

const arr = [1, 2, 3, 5, 4];

for (const ele of arr) {
    // console.log(ele);
}

const greeting = 'hello world!';

for (const greet of greeting) {
    // console.log(`each char is ${greet}`);  
    
}

//map --> is an object hold key - value pairs and remembers the original insertion order of the keys.

const map = new Map()

map.set('IN', 'INDIA');
map.set('us', 'usa');
map.set('fr', 'france');

// console.log(map);
 // output Map(3) { 'IN' => 'INDIA', 'us' => 'usa', 'fr' => 'france' }

//  for (const key of map) {
//     console.log(key);
//     /** output
//      * [ 'IN', 'INDIA' ]
//         [ 'us', 'usa' ]
//         [ 'fr', 'france' ]
//      */
    
//  }

//if want key and value separately then using destructuring

for (const [key , value] of map) {
    // console.log(key ," ----> ",value);   
}

/**
 * accessing object value using for in
 */
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const myArr = ['js', 'py', 'cpp'];
for (const key in myArr) {
    // console.log(key); //print the index of array
    // console.log(myArr[key]);
    
}

/**
 * the difference between for of and for in is 
 * for of iterates on the value of string n array n map. doesn't work for object.
 * for in iterates on the key or index of array n it is use to iterate through object
 */