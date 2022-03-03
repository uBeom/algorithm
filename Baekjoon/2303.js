// 숫자 게임

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n' ']+/).map(e=>parseInt(e));

const N = input[0];
const peoples = [];
const maxs = [];

let num = 1;
for(let i=0; i<N; i++) {
  peoples.push(input.slice(num, num + 5))
  num+=5;
}

peoples.forEach((e)=>{
  const sum = e.reduce((prev, current) => prev + current, 0);
  let max = Number.MIN_SAFE_INTEGER;

  for(let i=0; i<e.length-1; i++) {
    for(let j=i+1; j<e.length; j++) {
      let cardSum = (sum - (e[i] + e[j])) % 10;
      if(cardSum > max) max = cardSum;
    }
  }
  maxs.push(max);
});

maxs.forEach((e, i) => {
  if(e === Math.max.apply(null, maxs)) answer = i+1;
});

console.log(answer);