// 손익분기점

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[' ']+/).map(e=>parseInt(e));

let val = input[2] - input[1];
let cnt = Math.floor(input[0] / val);

if(val > 0) {
  cnt++;

  console.log(cnt);
}
else {
  console.log(-1);
}