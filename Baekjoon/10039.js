// 평균 점수

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const avg = input.map(e=>{
  if(e <= 40) return 40;
  else return e;
});

const answer = Math.floor(avg.reduce((acc, cur)=>acc + cur) / 5);

console.log(answer);