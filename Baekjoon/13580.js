// Andando no tempo

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

input.sort((a, b)=>a-b);

const val1 = input[0];
const val2 = input[1];
const val3 = input[2];

if(val1 === val2) console.log('S');
else if(val2 === val3) console.log('S');
else if(val1 + val2 === val3) console.log('S');
else console.log('N')