// 사칙연산

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = parseInt(input[0] + input[1]);
const val2 = parseInt(input[0] - input[1]);
const val3 = parseInt(input[0] * input[1]);
const val4 = parseInt(input[0] / input[1]);
const val5 = parseInt(input[0] % input[1]);

console.log(val1 + '\n' + val2 + '\n' + val3 + '\n' + val4 + '\n' + val5);