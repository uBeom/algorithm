// 立方体 (Cube)

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = Math.pow(input[0], 3);

console.log(answer);