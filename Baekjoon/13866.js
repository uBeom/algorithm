// 팀 나누기

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const team1 = input[0] + input[3];
const team2 = input[1] + input[2];

const answer = Math.abs(team1 - team2);

console.log(answer);