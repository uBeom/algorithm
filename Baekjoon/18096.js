// Арифметическая магия

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const answer = Math.pow(1, input[0]);

console.log(answer);