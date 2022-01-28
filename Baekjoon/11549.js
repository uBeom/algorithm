// Identifying tea

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const tea = input[0];
const answers = input.slice(1, input.length);
let answer  = 0;

answers.forEach(e => {
  if(e === tea) answer++;
});

console.log(answer);