// 수학은 체육과목 입니다

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = 1;
const val2 = input[0] * 3;
const val3 = (input[0]-1) * 0.5 * 2

console.log(val1 + val2 + val3);