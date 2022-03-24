// 음양 더하기
function solution(absolutes, signs) {
  let sum = 0;

  for(let i=0, length=signs.length; i<length; i++) {
    if(signs[i]) sum += absolutes[i];
    else sum += absolutes[i] * -1;
  }

  return sum;
}

 console.log(solution([4,7,12], [true,false,true]));