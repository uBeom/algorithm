// 상근날드

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

let burger = Math.min(input[0], input[1], input[2]);
let drink = Math.min(input[3], input[4]);

const answer = burger + drink - 50;

console.log(answer);