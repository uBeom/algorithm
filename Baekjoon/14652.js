// 나는 행복합니다~

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = parseInt(input[2] / input[1]);
const val2 = parseInt(input[2] % input[1]);

console.log(val1, val2);