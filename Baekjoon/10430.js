// 나머지

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const val1 = input[0];
const val2 = input[1];
const val3 = input[2];

console.log((val1+val2)%val3 + '\n' + ((val1%val3) + (val2%val3))%val3 + '\n' + (val1*val2)%val3 + '\n' + ((val1%val3) * (val2%val3))%val3);