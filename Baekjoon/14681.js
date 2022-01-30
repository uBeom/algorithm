// 사분면 고르기

const fs = require('fs');
const [x, y] = fs.readFileSync('../main.txt').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

if(x > 0) {
  if(y > 0) console.log(1);
  else if(y < 0) console.log(4);
}
else if(x < 0) {
  if(y > 0) console.log(2);
  else if(y < 0) console.log(3);
}