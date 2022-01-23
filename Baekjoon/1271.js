// 엄청난 부자2

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const val1 = BigInt(input[0]);
const val2 = BigInt(input[1]);

console.log(val1 / val2 + '\n' + val1 % val2);