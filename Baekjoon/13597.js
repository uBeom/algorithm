// Tri-du

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const set = new Set(input.sort((a, b)=>b-a));
const answer = [...set];

console.log(answer[0]);