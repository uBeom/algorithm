// 시험 점수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const val1 = input[0] + input[1] + input[2] + input[3];
const val2 = input[4] + input[5] + input[6] + input[7];

const answer = Math.max(val1, val2);

console.log(answer);