// 큰 수 곱셈

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>BigInt(e));

const answer = (input[0] * input[1]).toString();

console.log(answer);