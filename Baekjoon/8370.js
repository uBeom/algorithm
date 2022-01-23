// Plane

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const economy = input[0] * input[1];
const business = input[2] * input[3];
const answer = economy + business;

console.log(answer);