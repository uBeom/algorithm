// Speed fines are not fine!

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>parseInt(e));

const limit = input[0];
const speed = input[1];
const overSpeed = speed - limit;

if(overSpeed <= 0) console.log('Congratulations, you are within the speed limit!');
else if(0 < overSpeed && overSpeed <= 20) console.log('You are speeding and your fine is $100.');
else if(20 < overSpeed && overSpeed <= 30) console.log('You are speeding and your fine is $270.');
else if(30 < overSpeed) console.log('You are speeding and your fine is $500.');