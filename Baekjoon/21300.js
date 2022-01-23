// Bottle Return

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const cent = input.map(e=>e*5);
const answer = cent.reduce((acc, cur)=>acc + cur);

console.log(answer);