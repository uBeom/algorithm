// 전자레인지

const fs = require('fs');
const input = parseInt(fs.readFileSync('../main.txt').toString());

const timeA = 300;
const timeB = 60;
const timeC = 10;

let a = Math.floor(input / timeA);
let b, c;
let remainA, remainB, remaiC;

if(input % timeA === 0) return console.log(a);
else {
  remainA = input % timeA;
  if(remainA % timeB === 0) return console.log(math.floor())
}
a = Math.floor(input / timeA);
remainA = input % timeA;
if(remainA !== 0) {
  b = Math.floor(remainA / timeB);
  remainB = remainA % timeB;
  if(remainC !== 0) {
    c = Math.floor(remainB / timeC);
    remainC = remainB % c;
  }
}

if(remainC !== 0) console.log(-1);
else console.log(a, b, c);