// A+B - 2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/);

const val1 = parseInt(input[0]);
const val2 = parseInt(input[1]);

console.log(val1 + val2);