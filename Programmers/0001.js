// 자릿수 더하기
function solution(n)
{
  const answer = n.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);  
  return answer;
}

console.log(solution(123));