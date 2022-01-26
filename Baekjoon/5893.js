// 17배

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const bin = BigInt('0b' + input);
const answer = (bin * 17n).toString(2);

console.log(answer);