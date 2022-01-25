// 인공지능 시계

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

let hour = input[0];
let minute = input[1];
let sec = input[2];
let val = input[3];

sec += val;
minute += Math.floor(sec / 60);
hour += Math.floor(minute / 60);

sec %= 60;
minute %= 60;
hour %= 24;

console.log(hour, minute, sec);