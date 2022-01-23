// 큰 수 (BIG)

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>BigInt(e));

const answer = (input[0] % 20000303n).toString();

console.log(answer);