// 곱셈

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

let val1 = input[0];
let val2 = input[1].toString().split('').map(e=>parseInt(e));

let answer1 = val1 * val2[2];
let answer2 = val1 * val2[1];
let answer3 = val1 * val2[0];
let answer4 = answer1 + (answer2 * 10) + (answer3 * 100);

console.log(`${answer1}\n${answer2}\n${answer3}\n${answer4}`);