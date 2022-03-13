// 하샤드 수
function solution(x) {
  const num = x;
  const sum = x.toString().split('').reduce((acc, cur)=>acc+parseInt(cur), 0);

  if(num%sum === 0) return true;
  else return false;
}

console.log(solution(13));