// 사파리월드

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[' ']+/).map(e=>parseInt(e));

const answer = Math.abs(input[0] - input[1]);

console.log(answer);