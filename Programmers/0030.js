// 다트 게임
function solution(dartResult) {
  const arr = [];

  let flag;
  for(let i=dartResult.length-1; i>=0; i--) {
    if(i===flag) continue;

    const num = parseInt(dartResult[i]);
    if(Number.isInteger(num)) {
      if(!num) {
        const frontNum = parseInt(dartResult[i-1]);
        if(Number.isInteger(frontNum)) {
          arr.push(parseInt([...dartResult].splice(i-1, 2).join('')));
          flag=i-1;
        } else arr.push(0);
      } else arr.push(num);
    }
  }
  arr.reverse();

  const sign = dartResult.split(/\d/g);

  for(let i=sign.length-1; i>=0; i--) {
    if(sign[i] === '') sign.splice(i, 1);
  }

  const answer = [];
  const signDivision = sign.map(e => e.split(''));
  signDivision.forEach((e, signDivisionIndex) => {
    for(let i=0, length=e.length; i<length; i++) {
      if(e[i] === 'S') answer.push(arr[signDivisionIndex] ** 1);
      else if(e[i] === 'D') answer.push(arr[signDivisionIndex] ** 2);
      else if(e[i] === 'T') answer.push(arr[signDivisionIndex] ** 3);
      else if(e[i] === '*') {
        if(signDivisionIndex) answer[signDivisionIndex-1] *=2;
          answer[signDivisionIndex] *= 2;
      }
      else if(e[i] === '#') answer[signDivisionIndex] *= -1;
    }
  });

  const sum = answer.reduce((acc, cur) => acc+cur, 0);
  return sum;
}

console.log(solution('10D4S10D'));