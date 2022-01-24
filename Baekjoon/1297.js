// TV 크기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = Math.floor(input[0]*input[1] / Math.sqrt(Math.pow(input[1], 2) + Math.pow(input[2], 2)));
const val2 = Math.floor(input[0]*input[2] / Math.sqrt(Math.pow(input[1], 2) + Math.pow(input[2], 2)));

console.log(val1, val2);