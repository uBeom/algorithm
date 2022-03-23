// 다트 게임
function solution(dartResult) {
  const arr = [];

  [...dartResult].forEach((e, i)=>{
    if(e === 'S') {
      if(dartResult[i-1] === '0') arr.push([parseInt(dartResult[i-2] + dartResult[i-1]), 'S']);
      else arr.push([parseInt(dartResult[i-1]), 'S']);

      if(dartResult[i+1] === '*') arr.push(['*', 'S']);
      else if(dartResult[i+1] === '#') arr.push(['#', 'S']);
    }
    else if(e === 'D') {
      if(dartResult[i-1] === '0') arr.push([parseInt(dartResult[i-2] + dartResult[i-1]), 'D']);
      else arr.push([parseInt(dartResult[i-1]), 'D']);
      
      if(dartResult[i+1] === '*') arr.push(['*', 'D']);
      else if(dartResult[i+1] === '#') arr.push(['#', 'D']);
    }
    else if(e === 'T') {
      if(dartResult[i-1] === '0') arr.push([parseInt(dartResult[i-2] + dartResult[i-1]), 'T']);
      else arr.push([parseInt(dartResult[i-1]), 'T']);

      if(dartResult[i+1] === '*') arr.push(['*', 'T']);
      else if(dartResult[i+1] === '#') arr.push(['#', 'T']);
    }
  });

 return arr;
}

console.log(solution('1S*2T*3S'));
console.log(solution('1D2S#10S'));