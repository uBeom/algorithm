// Contest Timing

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

let day = input[0] - 11;
let hour = input[1] - 11;
let minute = input[2] - 11;

if(minute < 0) {
  hour -= 1;
  minute += 60;
}
if(hour < 0) {
  day -= 1;
  hour += 24;
}

day = day * 24 * 60;
hour = hour * 60;

const answer = day + hour + minute;

if(answer < 0) console.log(-1);
else console.log(answer);