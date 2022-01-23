// 홍익대학교

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input[0] - 1946;

console.log(answer);