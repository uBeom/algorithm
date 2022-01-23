// Julka

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/[\r\n]+/).map(e=>BigInt(e));

const totApple = input[0];
const diff = input[1];

const klaudia = ((totApple + diff) / 2n);
const natalia = ((totApple - diff) / 2n);

console.log(klaudia + '\n' + natalia);