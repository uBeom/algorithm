// 검증수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const arr = input.map(e=>parseInt(e)**2);
const answer = arr.reduce((acc, cur)=>acc+cur);

console.log(answer % 10);