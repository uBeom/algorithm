// 폰 노이만과 파리

const fs = require('fs');
const [S, T, D] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const time = Math.floor(D / (S * 2));
const answer = time * T;

console.log(answer);