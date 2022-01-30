// 전자레인지

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const A = input[0];
const B = input[1];
const C = input[2];
const D = input[3];
const E = input[4];
let time = 0;

if(A < 0) {
  time += Math.abs(A) * C;
  time += D;
  time += B * E;
}
else if(A === 0) {
  time += D;
  time += B * E;
}
else if(A > 0) {
  const temp = B - A;
  time += temp * E;
}

console.log(time);