// РАВЕНСТВО

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>BigInt(e));

const val = input[1] - input[2];

const answer = (val / input[0]).toString();

console.log(answer);