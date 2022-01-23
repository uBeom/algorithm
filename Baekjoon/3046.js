// R2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = input[0];
const val2 = input[1];

const answer = val2 * 2 - val1;

console.log(answer);