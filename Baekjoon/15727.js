// 조별과제를 하려는데 조장이 사라졌다

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = 5;
const val2 = input[0];
const answer = Math.ceil(val2 / val1);

console.log(answer);