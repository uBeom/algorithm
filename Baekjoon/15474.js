// 鉛筆 (Pencils)

const fs = require('fs');
let [N, A, B, C, D] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

let aPrice = 0;
let bPrice = 0;

if(N % A === 0) aPrice = (N / A) * B;
else aPrice = Math.floor(N / A + 1) * B;

if(N % C === 0) bPrice = (N / C) * D;
else bPrice = Math.floor(N / C + 1) * D;

const answer = Math.min(aPrice, bPrice);

console.log(answer);