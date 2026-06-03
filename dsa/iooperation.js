const path =  require("path");
const input = require("fs")
    .readFileSync("inputfile.txt", "utf8")
    .trim()
    .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

console.log(arr);