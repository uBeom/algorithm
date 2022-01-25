// 체스판 조각

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const row = parseInt(input/2);
const column = parseInt(input - row);

const answer = (row+1) * (column+1);

console.log(answer);