// 16진수

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const val = parseInt(input[0], 16);

console.log(val);