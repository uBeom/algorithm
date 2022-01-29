// Equality

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[+=' ']+/).map(e=>parseInt(e));

if(input[0] + input[1] === input[2]) console.log('YES');
else console.log('NO');