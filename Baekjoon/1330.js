// 두 수 비교하기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[' ']+/).map(e=>parseInt(e));

const val1 = input[0];
const val2 =  input[1];

if(val1 < val2) console.log('<');
else if(val1 > val2) console.log('>');
else if(val1 === val2) console.log('==');