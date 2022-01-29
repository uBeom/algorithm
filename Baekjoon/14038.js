// Tournament Selection

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/);

const map = new Map();

input.forEach(e=>{
  if(map.has(e)) map.set(e, map.get(e)+1);
  else map.set(e, 1);
});

if(!map.has('W')) console.log(-1);
else {
  const answer = map.get('W');

  switch (answer) {
    case 1:
    case 2:
      console.log(3);
      break;
    case 3:
    case 4:
      console.log(2);
      break;
    case 5:
    case 6:
      console.log(1);
      break;
  }
}