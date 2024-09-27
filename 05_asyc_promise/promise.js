const fs = require('fs');
const path = require('path');

// Resolve the file path relative to the current file
const filePath = path.join(__dirname, '../05_asyc_promise/fileReading.txt');

//my own async function under the hood any async fn uses js async function itself.

function shivamReadFile(){
    return new Promise(function(resolve){
        fs.readFile(filePath,'utf-8',function(err,data){
            resolve(data);
        });
    })
}
//callback function to call
function onDone(data){
    console.log(data);
    
}
console.log(shivamReadFile());
shivamReadFile().then(onDone)
