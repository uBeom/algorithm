// 특별한 날

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const month = input[0];
const day = input[1];

if(month < 2) console.log('Before');
else if(month > 2) console.log('After');
else if(month === 2) {
  if(day < 18) console.log('Before');
  else if(day > 18) console.log('After');
  else if(day === 18) console.log('Special');
}