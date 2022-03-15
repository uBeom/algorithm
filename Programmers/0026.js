// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  const answer = arr.filter(e=>{
    if(e%divisor === 0) return true;
    else false;
  });
  
  if(!answer.length) return [-1];

  return answer.sort((a, b)=>a-b);
}

console.log(solution([5, 9, 7, 10], 5));