// Site Score

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input[0]*56 + input[1]*24 + input[2]*14 + input[3]*6;

console.log(answer);