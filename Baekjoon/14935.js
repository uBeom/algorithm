// FA

const fs = require('fs');
const x = fs.readFileSync('/dev/stdin').toString();

let number = x;
let length = x.split('').length;
const map = new Map();

while(true) {
  map.set(number, 1);
  length = number.toString().split('').length;
  number = number.toString()[0] * length;
  if(map.get(number) === 1) break;
}

if(length === 1) console.log('FA');
else console.log('NFA');