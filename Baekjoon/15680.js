// 연세대학교

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

if(input === 0) console.log('YONSEI');
else if(input === 1) console.log('Leading the Way to the Future');