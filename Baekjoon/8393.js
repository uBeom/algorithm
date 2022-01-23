// 합

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

let answer = 0;

for(let i=1; i<input[0]+1; i++) answer += i;

console.log(answer);