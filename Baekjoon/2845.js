// 파티가 끝나고 난 뒤

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/);
const input1 = input[0].split(' ').map(e=>parseInt(e));
const input2 = input[1].split(' ').map(e=>parseInt(e));

const number = input1[0] * input1[1];
const arr = input2.map(e=>e-number).join(' ');

console.log(arr);