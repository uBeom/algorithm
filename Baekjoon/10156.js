// 과자

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

const price = input[0];
const number = input[1];
const money = input[2];

const pay = price * number;

if(pay <= money) console.log(0);
else console.log(pay - money);