// Do Not Touch Anything

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

let column;
let row;

if(input[0] % input[2] === 0) column = input[0] / input[2];
else column = Math.floor(input[0] / input[2]) + 1;

if(input[1] % input[2] === 0) row = input[1] / input[2];
else row = Math.floor(input[1] / input[2]) + 1;

const answer = column * row;

console.log(answer);