// 세수정렬

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = input.sort((a, b)=>a-b);

console.log(...answer);