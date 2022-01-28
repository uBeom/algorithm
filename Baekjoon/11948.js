// 과목선택

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const science = input.slice(0, 4).sort((a, b)=>b-a);
const history = input.slice(4, input.length).sort((a, b)=>b-a);

const answer = science[0] + science[1] + science[2] + history[0];

console.log(answer);