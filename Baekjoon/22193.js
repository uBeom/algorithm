// Multiply

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const answer = input[2] * input[3];

console.log(answer);