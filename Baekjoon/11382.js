// 꼬마 정민

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input[0] + input[1] + input[2];

console.log(answer);