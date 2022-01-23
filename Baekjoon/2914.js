// 저작권

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const val1 = parseInt(input[0]);
const val2 = parseInt(input[1]);

const answer = val1 * (val2 - 1) + 1;

console.log(answer);