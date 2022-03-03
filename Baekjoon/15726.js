// 이칙연산

const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = Math.floor(A * B / C);
const val2 = Math.floor(A / B * C);
const answer = Math.max(val1, val2);

console.log(answer);