// 삼각형 외우기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const totDeg = input.reduce((acc, cur)=>acc+cur);

if(totDeg === 180) {
  const set = new Set(input);
  if(set. size === 1) console.log('Equilateral');
  else if(set.size === 2) console.log('Isosceles');
  else if(set.size === 3) console.log('Scalene');
}
else console.log('Error');