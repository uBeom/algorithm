// AFC 윔블던

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

if(input[0] < input[1]) console.log(-1);
else {
  const A = (input[0] + input[1]) / 2;
  const B = input[0] - A;

  if(!Number.isInteger(A)) {
    console.log(-1);
  }
  else {
    if(A > B) console.log(A, B);
    else console.log(B, A);
  }
}