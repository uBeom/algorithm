// Hard choice

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const chicken = input[0] - input[3];
const beef = input[1] - input[4];
const pasta = input[2] - input[5];

let answer = 0;

if(chicken < 0) answer += Math.abs(chicken);
if(beef < 0) answer += Math.abs(beef);
if(pasta < 0) answer += Math.abs(pasta);

console.log(answer);