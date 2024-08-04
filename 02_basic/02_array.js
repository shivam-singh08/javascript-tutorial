const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superhero', 'batman','flash'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superhero', 'batman', 'flash' ] ]

//way to concate both array is either using concat or destructing using spread operator ...

const allHeroConcat = marvel_heros.concat(dc_heros);
console.log(allHeroConcat);

const allHeroDestruct = [...marvel_heros, ...dc_heros];
console.log(allHeroDestruct);

const nestedArray = [1, 2, 3, [4, 5, 6], 7 ,[8 , 9 ,[10, 11]]] //nested array

//change nestedArray to single array.

const singleArr = nestedArray.flat(Infinity); //with flat we can make into single also we can define upto what depth we want to convert.Infinity denote all nested array into single array.
console.log(singleArr);
/**output
 * [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
 */

console.log(Array.isArray('shivam')); //false
console.log(Array.from('hello')); //[ 'h', 'e', 'l', 'l', 'o' ]

console.log(Array.from({name:"shivam"})) 
/**
 * this key value pair will give empty error as output 
 * [] we need to tell that we are creating array of key or value
 */

/**
 * if we have multiple input to be take as array
 * using Array.of()
 */
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]