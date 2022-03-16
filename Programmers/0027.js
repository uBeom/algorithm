// 같은 숫자는 싫어
function solution(arr)
{
  const answer = [];

  for(let i=0, length=arr.length; i<length; i++) {
    if(arr[i] !== arr[i+1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution([1,1,3,3,0,1,1]));