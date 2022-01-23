// 1998년생인 내가 태국에서는 2541년생?!

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input[0] - 543;

console.log(answer);