// 시험 성적

const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString());

switch (Math.floor(input/10)) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}