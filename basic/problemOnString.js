/**
 * 1.Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
 */

function ucFirst(param1){
    return param1[0].toUpperCase() + param1.slice(1);
}

console.log(ucFirst('shivam'));

/**
 * 2.Write a function checkSpam(str) that returns true if str contains ‘lottery’ or 'pay', otherwise false.
 */
function checkSpam(param) {
    return param.includes('lottery') || param.includes('pay');
}

console.log(checkSpam('buy lottery now')) //true
console.log(checkSpam('free pay')) //true
console.log(checkSpam("innocent rabbit")) //false


/**
 * 3.Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
 */

function truncate(str, val){
    return(str.length > val)? str.slice(0,val-1) + '...' : str;
}
const longString = truncate("What I'd like to tell on this topic is:", 20);
console.log(longString); //What I'd like to te...
const otherString = truncate("Hi everyone!", 20);
console.log(otherString); //Hi everyone!