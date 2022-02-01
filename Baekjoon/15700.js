// 타일 채우기 4

const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>BigInt(e));

const answer = (N * M / 2n).toString();

console.log(answer);