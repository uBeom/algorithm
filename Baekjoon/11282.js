// 한글

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const answer = String.fromCharCode(input + 44031);

console.log(answer);