// 방학 숙제

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

let kor;
let math;

if(input[1]%input[3] === 0) kor = input[1] / input[3];
else kor = Math.floor(input[1] / input[3]) + 1;

if(input[2]%input[4] === 0) math = input[2] / input[4];
else math = Math.floor(input[2] / input[4]) + 1;

const answer = input[0] - Math.max(kor, math);

console.log(answer);