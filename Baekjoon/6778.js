// Which Alien?

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const antenna = input[0];
const eyes = input[1];

let answer = '';
if(3 <= antenna && eyes <= 4) answer += 'TroyMartian\n';
if(antenna <=6 && 2 <= eyes) answer += 'VladSaturnian\n';
if(antenna <=2 && eyes <= 3) answer += 'GraemeMercurian\n';

console.log(answer);