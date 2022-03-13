// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  const answer = [];
  const value = x;
  
  for(let i=0; i<n; i++) {
    answer.push(x);
    x+=value;
  }

  return answer;
}

console.log(solution(-4,	2));