// ISBN

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const NUMBER = 91;

const answer = NUMBER + input[0] * 1 + input[1] * 3 + input[2] * 1;

console.log(`The 1-3-sum is ${answer}`);