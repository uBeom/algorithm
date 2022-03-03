// 공백 없는 A+B

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(e=>parseInt(e));

console.log(input.indexOf(0));
console.log(input.lastIndexOf(0));

if(input.indexOf(0)) {
  if(input.lastIndexOf(0)) {
    const A = parseInt(input.slice(0, input.indexOf(0)+1).join(''));
    const B = parseInt(input.slice(input.indexOf(0)+1, input.lastIndexOf(0)+1).join(''));
    const answer = A + B;
  
    console.log(answer);
  }
  else {
    const A = input.slice(0, input.lastIndexOf(0)).join('');
    const B = input.slice(input.indexOf(0)+1, input.lastIndexOf(0)+1).join('');
  
    console.log('3' + A,B);  
  }
}
else if(input.indexOf(0)) {
  const A = input.slice(0, input.indexOf(0)+1).join('');
  const B = input.slice(input.indexOf(0)+1, input.length);

  console.log('2' + A,B);
}
else {
  // console.log(input);
  // console.log(input.join(''));
}