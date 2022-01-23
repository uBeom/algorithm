// 세금

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = parseInt(input[0] - (input[0] * 0.22));
const val2 = parseInt(input[0] - (input[0] * 0.2 * 0.22));

console.log(val1, val2);