// 쿠폰

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>Number(e));

for(let i=1; i<input[0]+1; i++)
  console.log(`$${(input[i] * 0.8).toFixed(2)}`);