// 두 정수 사이의 합
function solution(a, b) {
  if(a === b) return a;

  let sum = 0;

  for(let i=Math.min(a, b); i<=Math.max(a, b); i++) sum += i;

  return sum;
}

console.log(solution(3, 5));