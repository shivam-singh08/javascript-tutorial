const fs = require('fs');
const path = require('path');

// Resolve the file path relative to the current file
const filePath = path.join(__dirname, '../05_asyc_promise/fileReading.txt');

fs.readFile(filePath,"utf-8",function(err,data){
    console.log(data);
    
})