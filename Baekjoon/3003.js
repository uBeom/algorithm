// 킹, 퀸, 룩, 비숍, 나이트, 폰

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const chess = [1, 1, 2, 2, 2, 8];
const answer = input.map((e, i)=>chess[i]-e).join(' ');

console.log(answer);