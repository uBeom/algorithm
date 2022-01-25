// 오븐 시계

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

let hour = input[0];
let minute = input[1];
let val = input[2];

minute += val;
hour += Math.floor(minute / 60);

minute %= 60;
hour %= 24;

console.log(hour, minute);