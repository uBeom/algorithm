// 카드 게임

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const answer = input.reduce((acc, cur)=>acc+cur);

console.log(answer);