// 타임 카드

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

let secA = input[5] - input[2];
let minuteA = input[4] - input[1];
let hourA = input[3] - input[0];

if(secA < 0) {
  minuteA -= 1;
  secA += 60;
}
if(minuteA < 0) {
  hourA -= 1;
  minuteA += 60;
}

let secB = input[11] - input[8];
let minuteB = input[10] - input[7];
let hourB = input[9] - input[6];

if(secB < 0) {
  minuteB -= 1;
  secB += 60;
}
if(minuteB < 0) {
  hourB -= 1;
  minuteB += 60;
}

let secC = input[17] - input[14];
let minuteC = input[16] - input[13];
let hourC = input[15] - input[12];

if(secC < 0) {
  minuteC -= 1;
  secC += 60;
}
if(minuteC < 0) {
  hourC -= 1;
  minuteC += 60;
}

console.log(`${hourA} ${minuteA} ${secA}\n${hourB} ${minuteB} ${secB}\n${hourC} ${minuteC} ${secC}`);