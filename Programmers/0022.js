// 콜라츠 추측
function solution(num) {
  let cnt = 0;
  
  for(let i=0; i<500; i++) {
    if(num === 1) return cnt;

    if(num%2) num = num * 3 + 1;
    else num /= 2;

    cnt++;
  }

  return -1;
}

console.log(solution(626331));