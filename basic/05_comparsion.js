/**
 * comparsions
 */

console.log('2'>1); //true
console.log('02' > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true. 

console.log(undefined == 0); //false
console.log(undefined == null); //true

/**
 * === --> strict type check check for value and its type.
 * == --> check for the value not its types.
 *
 */
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false