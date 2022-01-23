// Next in line

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const diff = input[1] - input[0];
const answer = input[input.length-1] + diff;

console.log(answer);