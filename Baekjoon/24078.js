// 余り (Remainder)

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input[0] % 21;

console.log(answer);