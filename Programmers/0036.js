// 예산
function solution(d, budget) {
  d.sort((a, b)=>a-b);
  let sum=0;
  let answer=0;

  d.forEach(e => {
    if(sum+e <= budget) {
      sum+=e;
      answer++;
    }
  }); 
  
  return answer;
}

 console.log(solution([2,2,3,3], 10));