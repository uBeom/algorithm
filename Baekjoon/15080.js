// Every Second Counts

const fs = require('fs');
const input = fs.readFileSync('../main.txt').toString().trim().split(/[\r\n' ':]+/).map(e=>parseInt(e));

if(input[3] < input[0]) input[3] += 24;

const A = input[0] * 3600 + input[1] * 60 + input[2];
const B = input[3] * 3600 + input[4] * 60 + input[5];

const answer = B - A;

if(answer < 0) console.log(24 * 3600 - input[4] * 60);
else console.log(answer);