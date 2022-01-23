// 달달함이 넘쳐흘러

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/);

const val1 = input[0].split(' ').map(e=>parseInt(e));
const val2 = input[1].split(' ').map(e=>parseInt(e));

console.log(val2[0]-val1[2], val2[1]/val1[1], val2[2]-val1[0]);