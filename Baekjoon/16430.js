// 제리와 톰

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = input[1] - input[0];
const val2 = input[1];

console.log(val1, val2);