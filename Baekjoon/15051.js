// Máquina de café

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const map = new Map();
map.set(input[0], 1);
map.set(input[1], 2);
map.set(input[2], 3);
input.sort((a, b)=>a-b);

const min = map.get(input[0]);
const middle = map.get(input[1]);
const max = map.get(input[2]);

let answer = 0;

if(max === 1 || max === 3) {
  if(min === 2) {
    answer += input[0] * 2;
    answer += input[1] * 4;
  }
  else if(min === 1 || min === 3) {
    answer += input[0] * 4;
    answer += input[1] * 2;
  }
}
else if(max === 2) {
  answer += input[0] * 2;
  answer += input[1] * 2;
}

console.log(answer);