// 3진법 뒤집기
function solution(n) {
  let sum = 0;
  const arr = n.toString(3).split('').reverse();

  for(let i=arr.length-1; i>=0; i--) sum += arr[i] * (3 ** ((arr.length-1) - i));

  return sum;
}

 console.log(solution(125));