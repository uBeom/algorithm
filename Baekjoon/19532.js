// 수학은 비대면강의입니다

const fs = require('fs');
let [a, b, c, d, e, f] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(e=>parseInt(e));

let x = parseInt((c*e-b*f)/(a*e-b*d))
let y = parseInt((b*d-a*e)/(c*d-a*f))

console.log(x, y)