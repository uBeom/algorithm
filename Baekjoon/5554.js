// 심부름 가는 길

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const SECONDS = 60;

const number = input.reduce((acc, cur)=>acc+cur);
const minute = parseInt(number / SECONDS);
const seconds = parseInt(number % SECONDS);

console.log(minute + '\n' + seconds);