// 전자레인지

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

const timeA = 300;
const timeB = 60;
const timeC = 10;

const aRemain = input % timeA;
const aDiv = Math.floor(input / timeA);

if(aRemain === 0) console.log(aDiv, 0, 0);
else {
  const bRemain = aRemain % timeB;
  const bDiv = Math.floor(aRemain / timeB);

  if(bRemain === 0) console.log(aDiv, bDiv, 0);
  else {
    const cRemain = bRemain % timeC;
    const cDiv = Math.floor(bRemain / timeC);

    if(cRemain === 0) console.log(aDiv, bDiv, cDiv);
    else console.log(-1);
  }
}