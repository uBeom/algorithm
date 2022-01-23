// 身長 (Height)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const answer = input[1] - input[0];

console.log(answer);