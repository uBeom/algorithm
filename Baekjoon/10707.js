// 수도요금

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const water = input[4];
const x = input[0] * water;
const yPay = input[1];
const yLimit = input[2];
const addFee = input[3];
let y = 0;

if(water <= yLimit) y = yPay
else y = yPay + (water - input[2]) * addFee;

const answer = Math.min(x, y);

console.log(answer);