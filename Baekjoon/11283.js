// 한글 2

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answer = input[0].charCodeAt()-44031;

console.log(answer);