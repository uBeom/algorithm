// Vera and Outfits

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = input[0];
const val2 = input[0] - 1;
const answer = val1 * val2;

console.log(answer);