// 파일 옮기기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const basket1 = input[0] + input[3];
const basket2 = input[1] + input[2];

const answer = Math.min(basket1, basket2);

console.log(answer);