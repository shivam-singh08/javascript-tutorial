/**
 * JavaScript Date objects represent a single moment in time in a platform-independent format. 
 * Date objects encapsulate an integral number that represents milliseconds since the midnight
 *  at the beginning of January 1, 1970, UTC (the epoch).
 */

let todayDate = new Date();
console.log(todayDate); //date n time universal time zone.
console.log(todayDate.toString()); //local date n time.
console.log(todayDate.toDateString()); //local date
console.log(todayDate.toLocaleDateString()); //local date
/** output
 * 2024-08-04T13:45:24.837Z
    Sun Aug 04 2024 19:15:24 GMT+0530 (India Standard Time)
    Sun Aug 04 2024
    8/4/2024
 */
console.log(typeof todayDate); //object because is an object datatype
console.log(todayDate.getDate());
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth());

let createDate = new Date(2022, 0, 31); //months and day start with zero 
console.log(createDate.toDateString()); //Mon Jan 31 2022

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1722779752583

//covert timestamp from milisecond to second
// Date.now()/1000
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
let newDate2 = newDate.toLocaleString('default',{
    weekday:'long',
}) // this fn give flexibility to have custom way of mentioning date. with option of object use cntrl + space inside object.
console.log(newDate2); //Sunday


