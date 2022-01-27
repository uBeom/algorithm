// 10부제

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const day = input[0];
const cars = input.slice(1, input.length);

let answer = 0;
cars.forEach(e => {
  if(e === day) answer++;
});

console.log(answer);