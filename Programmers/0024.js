// 약수의 합
function solution(n) {
  const factors = [];
  const half = Math.floor(n/2);

  for(let i=1; i<=half; i++) {
    if(!(n%i)) factors.push(i);
  }
  factors.push(n);

  const answer = factors.reduce((acc, cur)=>acc+cur, 0);

  return answer;
}

console.log(solution(12));