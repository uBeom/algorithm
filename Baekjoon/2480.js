// 주사위 세개

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[' ']+/).map(e=>parseInt(e));

const map = new Map();

input.forEach(e=>{
  if(map.has(e)) map.set(e, map.get(e)+1);
  else map.set(e, 1);
});

const arr = [...map];

if(map.size === 1) console.log(10000 + arr[0][0] * 1000);
else if(map.size === 2) {
  if(arr[0][1] > arr[1][1]) console.log(1000 + arr[0][0] * 100);
  else if(arr[0][1] < arr[1][1]) console.log(1000 + arr[1][0] * 100);
}
else if(map.size === 3) {
  const max = Math.max(arr[0][0], arr[1][0], arr[2][0]);
  console.log(max * 100);
}