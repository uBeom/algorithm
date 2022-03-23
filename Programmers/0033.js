// 체육복
function solution(n, lost, reserve) {
  lost.sort((a, b) => a-b);
  reserve.sort((a, b) => a-b);

  for(let i=reserve.length-1; i>=0; i--) {
    if(lost.includes(reserve[i])) {
      lost.splice(lost.indexOf(reserve[i]), 1);
      reserve.splice(i, 1);
    }
  }

  for(let i=reserve.length-1; i>=0; i--) {
    if(lost.includes(reserve[i]+1)) {
      lost.splice(lost.indexOf(reserve[i]+1), 1);
      reserve.splice(i, 1);
    } else if(lost.includes(reserve[i]-1)) {
     lost.splice(lost.indexOf(reserve[i]-1), 1);
     reserve.splice(i, 1);
    }
  }

  const answer = n-lost.length;
  return answer;
}

 console.log(solution(5, [2, 4], [3, 1]));