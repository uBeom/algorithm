// 감정이입

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>BigInt(e));

const answer = (BigInt('0b' + input[0]) * BigInt('0b' + input[1])).toString(2);
console.log(answer);