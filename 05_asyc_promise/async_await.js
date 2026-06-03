const fs = require('fs');
const path = require('path');

// Resolve the file path relative to the current file
const filePath = path.join(__dirname, '../05_asyc_promise/fileReading.txt');

//my own async function under the hood any async fn uses js async function itself.

function shivamReadFile(){
    console.log('flow of promise inside fn shivamReadFile');
    
    let value = new Promise(function(resolve){
        console.log('inside the promise');
        
        fs.readFile(filePath,'utf-8',function(err,data){
            console.log('before resolve');
            
            resolve(data);
        });
    })
    return value;
}
//callback function to call
 async function onDone(){
    let resolveVal = await shivamReadFile();
    console.log(resolveVal);
}
onDone()
