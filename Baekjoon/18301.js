// Rats

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = parseInt((input[0]+1)*(input[1]+1)/(input[2]+1))-1;

console.log(answer);