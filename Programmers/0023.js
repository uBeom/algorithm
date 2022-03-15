// 평균 구하기
function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc+cur, 0);
  const average = sum/arr.length;

  return average;
}

console.log(solution([1,2,3,4]));